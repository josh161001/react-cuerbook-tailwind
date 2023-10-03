import React from "react";

const IniciarSesion = () => {
  return (
    <div className="flex min-h-screen items-center p-4  sm:items-center justify-center bg-gray-200">
      <div className="max-w-screen-lg w-full h-full bg-white rounded-md shadow-lg  flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
          <img
            src="https://www.elfinanciero.com.mx/resizer/EGYKeKSehZAIdfCDhSKdtkUUHsM=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/IRGKHRI4R5C7HBPFRGVIDUYZCA.jfif"
            alt="Login Banner"
            className="w-full h-full "
          />
        </div>
        <div className="w-full lg:w-1/2 p-12 sm:p-20">
          <h1 className="text-xl font-semibold mb-2">
            Bienvenido a <span className="text-red-700">ITNL</span>{" "}
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
              <a href="#" className="text-xs font-semibold text-red-700">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="mb-3">
              <button className="mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-500 px-2 py-1.5 rounded-md">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
