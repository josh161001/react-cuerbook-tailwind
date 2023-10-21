import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CuerbookContext } from "../../context/CuerbookContext";
import { useNavigate } from "react-router-dom";
import urlAxios from "../../config/axios";
import Spinner from "../../components/layout/Spinner";

const ModalCrearUsuario = ({ isOpen, onClose }) => {
  const roles = ["admin", "user"];

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

  const [usuario, setUsuario] = useState({
    email: "",
    name: "",
    password: "",
    imagen: null,
    roles: [],
  });

  const usuarioState = (e) => {
    if (e.target.name === "imagen") {
      setUsuario({
        ...usuario,
        imagen: e.target.files[0],
      });
    } else if (e.target.name === "roles") {
      setUsuario({
        ...usuario,
        roles: [e.target.value],
      });
    } else {
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validarUsuario = () => {
    const { email, name, password, imagen, roles } = usuario;

    return (
      !email.length ||
      !name.length ||
      !password.length ||
      !imagen ||
      !roles.length
    );
  };

  const guardarUsuario = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    if (token) {
      const formData = new FormData();
      formData.append("email", usuario.email);
      formData.append("name", usuario.name);
      formData.append("password", usuario.password);
      formData.append("roles", usuario.roles.join(","));
      formData.append("imagen", usuario.imagen);

      urlAxios
        .post("/users", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          Swal.fire(
            "Usuario registrado",
            "El usuario se ha registrado correctamente",
            "success"
          );
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          Swal.fire("Error", errorMessage, "error");
        });
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  };

  if (!tokenCargando) {
    return <Spinner />;
  }

  return (
    <>
      {isOpen && (
        <div className="fixed mt-12 top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full bg-gray-800 bg-opacity-80  z-50">
          <div className="p-4 dark:bg-gray-800 rounded-lg">
            <div className="flex border-b dark:border-gray-700">
              <h2 className="text-2xl text-gray-900 dark:text-white mb-4">
                Agregar Usuario
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:text-gray-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover-bg-gray-600 dark:hover-text-white"
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
                <span className="sr-only">Close form</span>
              </button>
            </div>

            <form className="dark:bg-gray-800 " onSubmit={guardarUsuario}>
              <div className="grid grid-cols-2 gap-2 ">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white">
                    Email de usuario
                  </label>
                  <input
                    onChange={usuarioState}
                    name="email"
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nombre@nuevoleon.tecnm.mx"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 pt-4  text-sm font-medium text-gray-900 dark:text-white">
                    Nombre de usuario
                  </label>
                  <input
                    onChange={usuarioState}
                    name="name"
                    type="text"
                    id="website-admin"
                    className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Departamento..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 pt-4 text-sm font-medium text-gray-900 dark:text-white">
                    Contraseña del usuario
                  </label>
                  <input
                    onChange={usuarioState}
                    name="password"
                    type="password"
                    placeholder="**********"
                    className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 pt-4 text-sm font-medium text-gray-900 dark:text-white">
                    Imagen de perfil
                  </label>
                  <input
                    className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                    name="imagen"
                    onChange={usuarioState}
                  />
                  <div
                    className="mt-2 text-sm text-gray-500 pt-1 dark:text-gray-300"
                    id="user_avatar_help"
                  >
                    Solo se permiten imágenes tipo jpg, png, jpeg, gif
                  </div>
                </div>
                <div></div>
              </div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Rol del usuario
              </label>
              <select
                name="roles"
                id="roles"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={usuarioState}
              >
                <option disabled selected>
                  --- Selecciona un rol ---
                </option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <button
                disabled={validarUsuario()}
                type="submit"
                className="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
              >
                Registrar usuario
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCrearUsuario;
