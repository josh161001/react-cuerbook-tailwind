import React, { useState } from "react";
import CuervoItnl from "../../assets/img/cuervo-ITNL.jpg";
import urlAxios from "../../config/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const EnviarInstrucciones = () => {
  const navigate = useNavigate();
  const [credencialesUsuario, setCredencialesUsuario] = useState({
    email: "",
  });

  const credencialesUsuarioState = (e) => {
    setCredencialesUsuario({
      ...credencialesUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const validarCredencialesUsuario = () => {
    const { email } = credencialesUsuario;
    return !email.length;
  };

  const guardarCredencialesUsuario = (e) => {
    e.preventDefault();

    urlAxios
      .post("/mailer/enviar-instrucciones", credencialesUsuario)
      .then((res) => {
        Swal.fire(
          "Correo enviado",
          "Se ha enviado un correo con las instrucciones para recuperar tu cuenta",
          "success"
        );

        navigate("/pagina-principal");
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          const errorMessage = error.response.data.message;
          Swal.fire("El correo no se ha enviado", errorMessage, "error");
        } else {
          Swal.fire(
            "El correo no se ha enviado",
            "Error en el servidor",
            "error"
          );
        }
      });
  };

  return (
    <div className="flex min-h-screen items-center p-4  sm:items-center justify-center bg-gray-200">
      <div className="max-w-screen-lg w-full h-full bg-white rounded-md shadow-lg  flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center items-center  lg:mb-0">
          <img src={CuervoItnl} alt="Login Banner" className="w-full h-full " />
        </div>
        <div className="w-full lg:w-1/2 p-12 sm:p-20">
          <h1 className="text-xl font-semibold mb-2">
            Sigue las instrucciones para recuperar tu cuenta en{" "}
            <span className="text-azul">CuerBook</span>{" "}
          </h1>
          <small className="text-gray-400">
            Escribe tu correo a continuacion{" "}
          </small>
          <form className="mt-4" onSubmit={guardarCredencialesUsuario}>
            <div className="mb-3">
              <label className="mb-2 block text-xs font-semibold">Correo</label>
              <input
                name="email"
                type="email"
                placeholder="correo@tecnm.mx"
                onChange={credencialesUsuarioState}
                className="block w-full rounded-md border border-gray-300 focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div className="mb-3 flex gap-2">
              <button
                disabled={validarCredencialesUsuario()}
                className="mb-1.5 block w-full text-center text-white bg-azul hover:bg-blue-700 px-3 py-1.5 rounded-md"
              >
                Enviar Instrucciones{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnviarInstrucciones;
