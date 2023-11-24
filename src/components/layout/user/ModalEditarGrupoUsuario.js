import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CuerbookContext } from "../../../context/CuerbookContext";
import { useNavigate, useParams } from "react-router-dom";
import urlAxios from "../../../config/axios";
import Spinner from "../../../components/layout/Spinner";

const ModalEditarGrupoUsuario = ({ isOpen, onClose }) => {
  const { id } = useParams();

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

  const [grupo, datoGrupo] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    const consultarGrupoEditar = async () => {
      const token = localStorage.getItem("access_token");

      if (token) {
        const grupoConsultaEditar = await urlAxios.get(`/groups/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        datoGrupo(grupoConsultaEditar.data.data);
      } else {
        navigate("/itnl/iniciar-sesion");
      }
    };
    consultarGrupoEditar();
  }, [navigate, id]);

  const usuarioState = (e) => {
    if (e.target.name === "imagen") {
      datoGrupo({
        ...grupo,
        imagen: e.target.files[0],
      });
    } else {
      datoGrupo({
        ...grupo,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validarGrupo = () => {
    const { name, description } = grupo;

    return !name.length || !description.length;
  };

  const guardarGrupo = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    if (token) {
      const formData = new FormData();
      formData.append("name", grupo.name);
      formData.append("imagen", grupo.imagen);
      formData.append("description", grupo.description);

      urlAxios
        .patch(`/groups/${id} `, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          Swal.fire(
            "Usuario Actualizado",
            "El grupo se ha Actualizado correctamente",
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
        <div className="fixed mt-0 top-0 right-0 bottom-0  left-0 flex justify-center items-center w-full bg-gray-800 bg-opacity-80  z-50">
          <div className="p-4 bg-gray-800 rounded-lg max-w-xs md:max-w-3xl lg:max-w-4xl">
            <div className="flex border-b dark:border-gray-700">
              <h2 className="text-xs text-white mb-3">Editar Grupo</h2>

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

            <form className="dark:bg-gray-800 " onSubmit={guardarGrupo}>
              <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-2 ">
                <div className="mb-4">
                  <label className="block mb-2 pt-1 lg:pt-4  text-xs font-medium text-white">
                    Nombre del grupo
                  </label>
                  <input
                    onChange={usuarioState}
                    name="name"
                    type="text"
                    value={grupo.name}
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
                  id="message"
                  rows="4"
                  value={grupo.description}
                  className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Descripcion del evento..."
                ></textarea>
              </div>

              <button
                disabled={validarGrupo()}
                type="submit"
                className="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
              >
                Actualizar Grupo
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default ModalEditarGrupoUsuario;
