import { useContext, useEffect, useState } from "react";
import { CuerbookContext } from "../../context/CuerbookContext";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const FormCrearGrupo = () => {
  const [grupo, setGrupo] = useState({
    name: "",
    imagen: null,
    descripcion: "",
  });

  if (!tokenCargando) {
    return <Spinner />;
  }

  return (
    <>
      <form className="bg-white dark:bg-gray-800 p-4">
        <label
          for="email-address-icon"
          class="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white"
        >
          Nombre del grupo{" "}
        </label>
        <div class="relative">
          <input
            type="text"
            id="email-address-icon"
            class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nombre del grupo..."
          />
        </div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="user_avatar"
        >
          Imagen del grupo
        </label>
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
        <div
          class="mt-3 text-sm text-gray-500 pt-1 dark:text-gray-300"
          id="user_avatar_help"
        >
          Solo se permiten imagenes tipo jpg, png, jpeg, gif{" "}
        </div>

        <label
          for="message"
          class="block mt-2 mb-4 text-sm font-medium text-gray-900 dark:text-white"
        >
          Descripción del grupo
        </label>
        <textarea
          name="descripcion"
          id="message"
          rows="4"
          class="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>

        <button
          type="submit"
          class="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Registrar Grupo
        </button>
      </form>
    </>
  );
};

export default FormCrearGrupo;
