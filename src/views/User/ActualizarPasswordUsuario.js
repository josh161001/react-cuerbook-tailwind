import React, { useContext, useEffect, useState } from "react";
import CuervoItnl from "../../assets/img/cuervo-ITNL.jpg";
import urlAxios from "../../config/axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import BotonFlotanteAdmin from "../../components/common/BotonFlotanteAdmin";
import { CuerbookContext } from "../../context/CuerbookContext";
import Spinner from "../../components/layout/Spinner";

const ActualizarPasswordUsuario = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tokenCargando, setTokenCargando] = useState(false);
  const [auth, guardarAuth] = useContext(CuerbookContext);

  const [password, setPassword] = useState({
    password: "",
    newPassword: "",
  });

  const credencialesUsuarioState = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

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

  const validarCredencialesUsuario = () => {
    const { password: currentPassword, newPassword } = password;
    return !currentPassword.length || !newPassword.length;
  };

  const guardarCredencialesUsuario = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");
    urlAxios
      .patch(`/users/${id}/actualizar-password`, password, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        Swal.fire(
          "Contraseña actualizada exitosamente",
          "Se ha actualizado la contraseña",
          "success"
        );
        localStorage.removeItem("access_token");
        navigate("/itnl/pagina-principal");
      })
      .catch((error) => {
        if (error.response || error.response.status === 401) {
          const errorMessage = error.response.data.message;
          Swal.fire("Error", errorMessage, "error");
        }
      });
  };
  if (!tokenCargando || !auth.auth) {
    return <Spinner />;
  }

  return (
    <div className="flex min-h-screen items-center p-4  sm:items-center justify-center bg-gray-200">
      <BotonFlotanteAdmin />{" "}
      <div className="max-w-screen-lg w-full h-full bg-white rounded-md shadow-lg  flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center items-center  lg:mb-0">
          <img src={CuervoItnl} alt="Login Banner" className="w-full h-full " />
        </div>
        <div className="w-full lg:w-1/2 p-12 sm:p-20">
          <h1 className="text-xl font-semibold mb-2">
            Sigue las instrucciones para actualizar tu contraseña en{" "}
            <span className="text-azul">Cuerbook</span>
          </h1>
          <small className="text-gray-400">
            Escribe tu contraseña actual a continuacion{" "}
          </small>

          <form className="mt-4" onSubmit={guardarCredencialesUsuario}>
            <div className="mb-3">
              <label className="mb-2 block text-xs font-semibold">
                Contraseña
              </label>
              <input
                onChange={credencialesUsuarioState}
                name="password"
                type="password"
                placeholder="*********"
                className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500"
              />
            </div>
            <small className="text-gray-400 ">
              Escribe tu nueva contraseña a continuacion{" "}
            </small>
            <div className="mb-3 mt-2">
              <label className="mb-2 block text-xs font-semibold">
                Nueva Contraseña
              </label>
              <input
                onChange={credencialesUsuarioState}
                name="newPassword"
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

export default ActualizarPasswordUsuario;
