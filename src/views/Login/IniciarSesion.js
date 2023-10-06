import React from "react";
import { NavLink } from "react-router-dom";
import CuervoItnl from "../../assets/img/cuervo-ITNL.jpg";

const IniciarSesion = () => {
  return (
    <div className="flex min-h-screen items-center p-4  sm:items-center justify-center bg-gray-200">
      <div className="max-w-screen-lg w-full h-full bg-white rounded-md shadow-lg  flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center items-center  lg:mb-0">
          <img src={CuervoItnl} alt="Login Banner" className="w-full h-full " />
        </div>
        <div className="w-full lg:w-1/2 p-12 sm:p-20">
          <h1 className="text-xl font-semibold mb-2">
            Bienvenido a <span className="text-red-700">CuerBook</span>{" "}
          </h1>
          <small className="text-gray-400">
            Bienvenido de vuelta, inicia sesión con tu cuenta
          </small>
          <form className="mt-4">
            <div className="mb-3">
              <label className="mb-2 block text-xs font-semibold">Correo</label>
              <input
                type="email"
                placeholder="correo@tecnm.mx"
                className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500"
              />
            </div>
            <div className="mb-3">
              <label className="mb-2 block text-xs font-semibold">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="*****"
                className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500"
              />
            </div>
            <div className="mb-3 flex flex-wrap content-center">
              <NavLink
                to="/itnl/recuperar-password"
                className="text-xs font-semibold text-red-700"
              >
                ¿Olvidaste tu contraseña?
              </NavLink>
            </div>
            <div className="mb-3 flex gap-2">
              <button className="mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-500 px-3 py-1.5 rounded-md">
                Iniciar Sesión
              </button>
              <NavLink
                to="/itnl/pagina-principal"
                className="mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-500 px-3 py-1.5 rounded-md flex items-center justify-center"
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-5 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                  </svg>
                  Volver atrás
                </span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
