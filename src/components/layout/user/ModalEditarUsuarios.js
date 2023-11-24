import React, { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { CuerbookContext } from "../../../context/CuerbookContext";
import { useNavigate, useParams } from "react-router-dom";
import urlAxios from "../../../config/axios";
import Spinner from "../../../components/layout/Spinner";
import Trix from "trix";

const ModalEditarUsuarios = ({ isOpen, onClose }) => {
  const { id } = useParams();
  const trixEditor = useRef(null);
  // Constantes y Variables de Estado
  const [auth, guardarAuth] = useContext(CuerbookContext);
  const [tokenCargando, setTokenCargando] = useState(false);
  const navigate = useNavigate();
  const [usuario, datoUsuario] = useState({
    email: "",
    name: "",
    department: "",
    description: "",
  });

  const handleTrixChange = () => {
    if (trixEditor.current) {
      const value = trixEditor.current.innerHTML;
      datoUsuario({
        ...usuario,
        description: value,
      });
    }
  };

  useEffect(() => {
    if (trixEditor.current) {
      trixEditor.current.innerHTML = usuario.description;
      trixEditor.current.addEventListener("trix-change", handleTrixChange);
    }
    return () => {
      if (trixEditor.current) {
        trixEditor.current.removeEventListener("trix-change", handleTrixChange);
      }
    };
  }, [usuario.imagen]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      guardarAuth({
        access_token: token,
        auth: true,
      });

      setTokenCargando(true);
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  }, [navigate, guardarAuth]);

  const consultarUsuario = async () => {
    const usuarioConsulta = await urlAxios.get(`/users/${id}`);
    console.log(usuarioConsulta.data.data);

    datoUsuario(usuarioConsulta.data.data);
  };

  useEffect(() => {
    consultarUsuario();
  }, []);

  const usuarioState = (e) => {
    if (e.target.name === "imagen") {
      datoUsuario({
        ...usuario,
        imagen: e.target.files[0],
      });
    } else {
      datoUsuario({
        ...usuario,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validarUsuario = () => {
    const { email, name, description, department } = usuario;

    return (
      !email.length || !name.length || !description.length || !department.length
    );
  };

  const guardarUsuario = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    if (token) {
      const formData = new FormData();
      formData.append("email", usuario.email);
      formData.append("name", usuario.name);
      formData.append("department", usuario.department);
      formData.append("description", usuario.description);
      formData.append("imagen", usuario.imagen);

      urlAxios
        .patch(`/users/${id} `, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          Swal.fire(
            "Usuario Actualizado",
            "El usuario se ha Actualizado correctamente",
            "success"
          );
          onClose();

          setTimeout(() => {
            navigate("/usuario/grupos");
          }, 3000);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            navigate("/itnl/iniciar-sesion");
          }

          const errorMessage = error.response.data.message;
          Swal.fire("Error", errorMessage, "error");
        });
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  };

  if (!tokenCargando || !auth.auth) {
    return <Spinner />;
  }
  return (
    <>
      {isOpen && (
        <div className="fixed mt-0 top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full bg-gray-800 bg-opacity-80  z-50">
          <div className="p-4 bg-gray-800 rounded-lg max-w-xs md:max-w-3xl lg:max-w-4xl">
            <div className="flex border-b border-gray-700">
              <h2 className="text-sm text-white mb-3">Editar Usuario</h2>
              <button
                onClick={onClose}
                className=" bg-transparent rounded-lg text-sm p-1 ml-auto text-white inline-flex items-center hover-bg-gray-600 hover-text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <form className="bg-gray-800 " onSubmit={guardarUsuario}>
              <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-2 ">
                <div className="lg:mb-2">
                  <label className="block mb-2 pt-1 lg:pt-4  text-xs font-medium text-white">
                    Correo
                  </label>
                  <input
                    onChange={usuarioState}
                    name="email"
                    type="email"
                    className="border text-xs rounded-lg  block w-full pl-2.5 p-1.5 bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    disabled
                    value={usuario.email}
                  />
                </div>
                <div className="lg:mb-2">
                  <label className="block mb-2 pt-1 lg:pt-4  text-xs font-medium text-white">
                    Jefe de departamento
                  </label>
                  <input
                    onChange={usuarioState}
                    name="name"
                    type="text"
                    className="border  text-xs rounded-lg  block w-full pl-2.5 p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Departamento..."
                    value={usuario.name}
                  />
                </div>
                <div className="lg:mb-2">
                  <label className="block mb-2 lg:pt-4 pt-1  text-xs font-medium text-gray-900 text-white">
                    Nombre departamento
                  </label>
                  <input
                    onChange={usuarioState}
                    name="department"
                    type="text"
                    className="border text-xs rounded-lg  block w-full pl-2.5 p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Departamento..."
                    value={usuario.department}
                  />
                </div>

                <div className="lg:mb-2">
                  <label className="block mb-2 pt-1 lg:pt-4 text-xs font-medium text-white">
                    Imagen de perfil
                  </label>
                  <input
                    className="w-full text-xs rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                    type="file"
                    name="imagen"
                    onChange={usuarioState}
                  />

                  <div className="mt-1 text-xs text-gray-300">
                    Solo se permiten imágenes tipo jpg, png, jpeg, gif
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-2 pt-1 lg:pt-4 text-xs font-medium text-white">
                  Descripcion del usuario
                </label>

                <trix-editor
                  value={usuario.description}
                  ref={trixEditor}
                  input="trix"
                />
              </div>
              <button
                disabled={validarUsuario()}
                type="submit"
                className="text-white mb-4 mt-6  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 bg-blue-600 hover-bg-blue-700 focus:ring-blue-800"
              >
                Actualizar usuario
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalEditarUsuarios;
