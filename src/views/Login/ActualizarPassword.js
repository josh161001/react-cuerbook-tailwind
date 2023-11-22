import React, { useEffect, useState } from "react";
import CuervoItnl from "../../assets/img/cuervo-ITNL.jpg";
import urlAxios from "../../config/axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
const ActualizarPassword = () => {
  const [tokenValido, setTokenValido] = useState(null);
  const [credencialesUsuario, setCredencialesUsuario] = useState({
    password: "",
  });
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verificarToken = async () => {
      try {
        const response = await urlAxios.get(`/mailer/verificar-token/${token}`);
        setTokenValido(true);
      } catch (error) {
        setTokenValido(false);
      }
    };

    verificarToken();
  }, [token]);

  useEffect(() => {
    if (tokenValido === false) {
      navigate("/itnl/pagina-principal");
    }
  }, [tokenValido, navigate]);

  const credencialesUsuarioState = (e) => {
    setCredencialesUsuario({
      ...credencialesUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const validarCredencialesUsuario = () => {
    const { password } = credencialesUsuario;
    return !password.length;
  };

  const guardarCredencialesUsuario = (e) => {
    e.preventDefault();

    urlAxios
      .patch(`/mailer/actualizar-password/${token}`, credencialesUsuario)
      .then((response) => {
        Swal.fire(
          "Contraseña actualizada exitosamente",
          "Se ha actualizado la contraseña",
          "success"
        );
        navigate("/itnl/pagina-principal");
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          const errorMessage = "Error al actualizar la contraseña";
          Swal.fire("Inicio de sesión fallido", errorMessage, "error");
        } else {
          Swal.fire("Error", "Error en el servidor", "error");
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
            <span className="text-red-700"></span>
          </h1>
          <small className="text-gray-400">
            Escribe tu nueva contraseña a continuacion{" "}
          </small>
          <form className="mt-4" onSubmit={guardarCredencialesUsuario}>
            <div className="mb-3">
              <label className="mb-2 block text-xs font-semibold">
                contraseña
              </label>
              <input
                onChange={credencialesUsuarioState}
                name="password"
                type="password"
                placeholder="*********"
                className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div className="mb-3 flex gap-2">
              <button
                disabled={validarCredencialesUsuario()}
                className="mb-1.5 block w-full text-center text-white bg-azul hover:bg-blue-700 px-3 py-1.5 rounded-md"
              >
                Actualizar Contraseña{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActualizarPassword;
