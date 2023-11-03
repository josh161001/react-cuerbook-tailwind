import React from "react";
import CuervoItnl from "../../assets/img/cuervo-ITNL.jpg";
import FormLogin from "../../components/layout/login/FormLogin";

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
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
