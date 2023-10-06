import React from "react";
import CuervoItnl from "../../assets/img/cuervo-ITNL.jpg";
const RecuperarPassword = () => {
  return (
    <div className="flex min-h-screen items-center p-4  sm:items-center justify-center bg-gray-200">
      <div className="max-w-screen-lg w-full h-full bg-white rounded-md shadow-lg  flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center items-center  lg:mb-0">
          <img src={CuervoItnl} alt="Login Banner" className="w-full h-full " />
        </div>
        <div className="w-full lg:w-1/2 p-12 sm:p-20">
          <h1 className="text-xl font-semibold mb-2">
            Sigue las instrucciones para recuperar tu cuenta en{" "}
            <span className="text-red-700">CuerBook</span>{" "}
          </h1>
          <small className="text-gray-400">
            Escribe tu correo a continuacion{" "}
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

            <div className="mb-3 flex gap-2">
              <button className="mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-500 px-3 py-1.5 rounded-md">
                Enviar Instrucciones{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecuperarPassword;
