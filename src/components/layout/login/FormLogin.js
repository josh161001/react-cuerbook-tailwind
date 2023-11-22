import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import urlAxios from "../../../config/axios";
import { CuerbookContext } from "../../../context/CuerbookContext";

const FormLogin = (props) => {
  const [auth, guardarAuth] = useContext(CuerbookContext);
  const navigate = useNavigate();

  const [credencialesUsuario, setCredencialesUsuario] = useState({
    email: "",
    password: "",
  });

  const credencialesUsuarioState = (e) => {
    setCredencialesUsuario({
      ...credencialesUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const validarCredencialesUsuario = () => {
    const { email, password } = credencialesUsuario;
    return !email.length || !password.length;
  };

  const guardarCredencialesUsuario = (e) => {
    e.preventDefault();
    urlAxios
      .post("/auth/login", credencialesUsuario)
      .then((res) => {
        const { access_token, roles, status } = res.data.data;

        localStorage.setItem("access_token", access_token);

        guardarAuth({
          access_token,
          auth: true,
        });

        Swal.fire(
          "Inicio de sesión exitoso",
          "Has iniciado sesión correctamente",
          "success"
        );

        status === true
          ? roles.includes("admin")
            ? navigate("/admin/dashboard")
            : roles.includes("user")
            ? navigate("/usuario/grupos")
            : navigate("/itnl/pagina-principal")
          : Swal.fire("Inicio de sesión fallido", "Usuario inactivo", "error");
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          const errorMessage = error.response.data.message;
          Swal.fire("Inicio de sesión fallido", errorMessage, "error");
        } else {
          Swal.fire("Error", "Error en el servidor", "error");
        }
      });
  };

  return (
    <form onSubmit={guardarCredencialesUsuario} className="mt-4">
      <div className="mb-3">
        <label className="mb-2 block text-xs font-semibold">Correo</label>
        <input
          name="email"
          type="email"
          placeholder="correo@tecnm.mx"
          className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500"
          onChange={credencialesUsuarioState}
        />
      </div>
      <div className="mb-3">
        <label className="mb-2 block text-xs font-semibold">Contraseña</label>
        <input
          name="password"
          type="password"
          placeholder="*****"
          className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500"
          onChange={credencialesUsuarioState}
        />
      </div>
      <div className="mb-3 flex flex-wrap content-center">
        <NavLink
          to="/itnl/enviar-instrucciones"
          className="text-xs font-semibold text-azul"
        >
          ¿Olvidaste tu contraseña?
        </NavLink>
      </div>
      <div className="mb-3 flex gap-2">
        <button
          disabled={validarCredencialesUsuario()}
          className="mb-1.5 block w-full text-center text-white bg-azul hover:bg-blue-700 px-3 py-1.5 rounded-md"
        >
          Iniciar Sesión
        </button>
        <NavLink
          to="/itnl/pagina-principal"
          className="mb-1.5 block w-full text-center text-white bg-azul hover:bg-blue-700 px-3 py-1.5 rounded-md flex items-center justify-center"
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Volver atrás
          </span>
        </NavLink>
      </div>
    </form>
  );
};

export default FormLogin;
