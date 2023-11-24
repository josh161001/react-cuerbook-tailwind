import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CuerbookContext } from "../../../context/CuerbookContext";
import { useNavigate } from "react-router-dom";
import urlAxios from "../../../config/axios";
import Spinner from "../../../components/layout/Spinner";

const ModalCrearGrupoUsuarios = ({ isOpen, onClose }) => {
  const [auth, guardarAuth] = useContext(CuerbookContext);
  const [tokenCargando, setTokenCargando] = useState(false);

  const navigate = useNavigate();

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

  const [grupo, setGrupo] = useState({
    name: "",
    imagen: "",
    description: "",
    status: false,
  });

  const usuarioState = (e) => {
    if (e.target.name === "imagen") {
      setGrupo({
        ...grupo,
        imagen: e.target.files[0],
      });
    } else if (e.target.name === "status") {
      setGrupo({
        ...grupo,
        status: e.target.checked,
      });
    } else {
      setGrupo({
        ...grupo,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validarUsuario = () => {
    const { name, imagen, description } = grupo;

    return !name.length || !imagen || !description;
  };

  const guardarUsuario = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    if (token) {
      const formData = new FormData();
      formData.append("name", grupo.name);
      formData.append("imagen", grupo.imagen);
      formData.append("description", grupo.description);
      formData.append("status", grupo.status); // Enviar el estado del grupo

      urlAxios
        .post("/groups", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          Swal.fire(
            "Grupo registrado",
            "El grupo se ha registrado correctamente",
            "success"
          );

          onClose();
        })
        .catch((error) => {
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
        <div className="fixed mt-0 top-0 right-0 bottom-0  left-0 flex justify-center items-center w-full bg-gray-800 bg-opacity-80  z-50">
          <div className="p-4 bg-gray-800 rounded-lg max-w-xs md:max-w-3xl lg:max-w-4xl">
            <div className="flex border-b dark:border-gray-700">
              <h2 className="text-xs text-white mb-3">Agregar Grupo</h2>

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

            <form className="dark:bg-gray-800 " onSubmit={guardarUsuario}>
              <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-2 ">
                <div className="mb-4">
                  <label className="block mb-2 pt-1 lg:pt-4  text-xs font-medium text-white">
                    Nombre del grupo
                  </label>
                  <input
                    onChange={usuarioState}
                    name="name"
                    type="text"
                    className="border text-xs rounded-lg  block w-full pl-2.5 p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Grupo de..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 pt-1 lg:pt-4 text-xs font-medium text-white">
                    Imagen del grupo
                  </label>
                  <input
                    className="w-full text-xs   rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
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
                <label className="block mb-4 pt-2 text-xs font-medium text-white">
                  Descripcion del Grupo
                </label>
                <textarea
                  type="text"
                  onChange={usuarioState}
                  name="description"
                  rows="4"
                  className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Escribe la descripcion del grupo..."
                ></textarea>
              </div>

              <button
                disabled={validarUsuario()}
                type="submit"
                className="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
              >
                Registrar grupo
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCrearGrupoUsuarios;
