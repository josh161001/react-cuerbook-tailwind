import { useContext, useState } from "react";
import urlAxios from "../../config/axios";
import Swal from "sweetalert2";
import { CuerbookContext } from "../../context/CuerbookContext";
const FormUser = () => {
  const [auth, guardarAuth] = useContext(CuerbookContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    imagen: null,
    roles: [0], // Cambiado a null inicialmente
  });

  const guardarUsuarioState = (e) => {
    const { name, value, type } = e.target;

    // Verifica si el campo es de tipo archivo (para la imagen)
    const newValue = type === "file" ? e.target.files[0] : value;

    if (name === "roles") {
      // Si es el campo de roles, divide la cadena por comas para obtener un array de roles
      setUser({
        ...user,
        roles: value.split(",").map((role) => role.trim()),
      });
    } else {
      setUser({
        ...user,
        [name]: name === "name" ? newValue.toLowerCase() : newValue,
      });
    }
  };

  const guardarUsuarioRest = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("imagen", user.imagen);

    // Agrega los roles al FormData
    user.roles.forEach((role) => {
      formData.append("roles[]", role);
    });

    const accessToken = JSON.parse(localStorage.getItem("access_token"));
    urlAxios
      .post("/users", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        Swal.fire(
          "Usuario registrado",
          "Usuario registrado exitosamente",
          "success"
        );
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          const errorMessage =
            "El email tiene el formato incorrecto o ya está registrado";
          Swal.fire("Registro de usuario fallido", errorMessage, "error");
        } else {
          Swal.fire("Error", "Error en el servidor", "error");
        }
      });
  };

  const validateUser = () => {
    const { name, email, password } = user;
    return !name.length || !email.length || !password.length;
  };

  return (
    <form className="dark:bg-gray-800 p-4" onSubmit={guardarUsuarioRest}>
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
          name="name"
          type="text"
          id="website-admin"
          class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Departamento..."
          onChange={guardarUsuarioState}
        />
      </div>

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
          name="email"
          type="text"
          id="email-address-icon"
          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="nombre@nuevoleon.tecnm.mx"
          onChange={guardarUsuarioState}
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
          name="password"
          type="password"
          id="password"
          placeholder="**********"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={guardarUsuarioState}
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
        onChange={guardarUsuarioState}
      />
      <div
        class="mt-3 text-sm text-gray-500 pt-1 dark:text-gray-300"
        id="user_avatar_help"
      >
        Solo se permiten imagenes tipo jpg, png, jpeg, gif{" "}
      </div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="roles"
      >
        Roles (separados por comas)
      </label>
      <input
        name="roles"
        type="text"
        id="roles"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Role1, Role2, Role3"
        onChange={guardarUsuarioState}
      />
      <button
        disabled={validateUser()}
        type="submit"
        class="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Registrar usuario
      </button>
    </form>
  );
};

export default FormUser;
