import { useContext, useEffect, useState } from "react";
import urlAxios from "../../config/axios";
import Swal from "sweetalert2";
import { CuerbookContext } from "../../context/CuerbookContext";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const FormCrearUsuario = () => {
  const [auth, guardarAuth] = useContext(CuerbookContext);
  const [tokenCargando, setTokenCargando] = useState(false);

  const navigate = useNavigate();

  const roles = ["admin", "user"];

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
      // Manejar la carga de la imagen
      setUsuario({
        ...usuario,
        imagen: e.target.files[0],
      });
    } else if (e.target.name === "roles") {
      setUsuario({
        ...usuario,
        roles: [e.target.value], // Coloca el valor del campo roles en un array
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
    <form className="dark:bg-gray-800 p-4" onSubmit={guardarUsuario}>
      <div>
        <label
          for="email-address-icon"
          class="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white"
        >
          Email de usuario
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            onChange={usuarioState}
            name="email"
            type="text"
            id="email-address-icon"
            class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="nombre@nuevoleon.tecnm.mx"
          />
        </div>
      </div>
      <label
        for="website-admin"
        class="block mb-2 text-sm pt-4 font-medium text-gray-900 dark:text-white"
      >
        Nombre de usuario
      </label>
      <div class="flex">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </span>
        <input
          onChange={usuarioState}
          name="name"
          type="text"
          id="website-admin"
          class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Departamento..."
        />
      </div>

      <div class="mb-4">
        <label
          for="password"
          class="block mb-2 pt-4 text-sm font-medium text-gray-900 dark:text-white"
        >
          Contrasena del usuario{" "}
        </label>
        <input
          onChange={usuarioState}
          name="password"
          type="password"
          id="password"
          placeholder="**********"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="user_avatar"
      >
        Imagen de perfil
      </label>
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
        name="imagen"
        onChange={usuarioState}
      />
      <div
        class="mt-3 mb-2 text-sm text-gray-500 pt-1 dark:text-gray-300"
        id="user_avatar_help"
      >
        Solo se permiten imagenes tipo jpg, png, jpeg, gif{" "}
      </div>
      <select
        name="roles"
        id="roles"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={usuarioState}
      >
        <option disabled selected>
          ---selecciona un rol---
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
        class="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Registrar usuario
      </button>
    </form>
  );
};

export default FormCrearUsuario;
