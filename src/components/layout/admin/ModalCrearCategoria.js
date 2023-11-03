import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CuerbookContext } from "../../../context/CuerbookContext";
import { useNavigate } from "react-router-dom";
import urlAxios from "../../../config/axios";
import Spinner from "../../../components/layout/Spinner";

const ModalCrearCategoria = ({ isOpen, onClose }) => {
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

  const [categoria, setCategoria] = useState({
    name: "",
  });

  const usuarioState = (e) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
    console.log(categoria);
  };

  const validarUsuario = () => {
    const { name } = categoria;

    let valido = !name.length;

    return valido;
  };

  const guardarUsuario = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    if (token) {
      urlAxios
        .post("/categories", categoria, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          Swal.fire(
            "Categoria registrado",
            "El categoria se ha registrado correctamente",
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
                Agregar Categoria
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

            <form className="dark:bg-gray-800 p-10 " onSubmit={guardarUsuario}>
              <div className=" gap-2 ">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white">
                    Nombre del categoria
                  </label>
                  <input
                    onChange={usuarioState}
                    name="name"
                    type="text"
                    className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Categoria de..."
                  />
                </div>
              </div>
              <button
                disabled={validarUsuario()}
                type="submit"
                className="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
              >
                Registrar categoria
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCrearCategoria;
