import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import urlAxios from "../../config/axios";
import { CuerbookContext } from "../../context/CuerbookContext";

const FormLogin = () => {
  const [auth, setAuth] = useContext(CuerbookContext);

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
    let validar = !email.length || !password.length;

    return validar;
  };

  const navigate = useNavigate();

  const guardarCredencialesUsuario = (e) => {
    e.preventDefault();
    urlAxios
      .post("/auth/login", credencialesUsuario)
      .then((res) => {
        const { access_token, roles } = res.data.data;

        localStorage.setItem("access_token", access_token);

        setAuth({
          access_token,
          auth: true,
        });

        Swal.fire(
          "Inicion de sesion Exitoso",
          "Ha iniciado sesion correctamente",
          "success"
        );

        if (roles.includes("admin")) {
          navigate("/admin/dashboard");
        } else {
          navigate("/usuario/eventos");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          const errorMessage = "Las credenciales no coinciden";
          Swal.fire("Inicio de sesion fallido", errorMessage, "error");
        } else {
          Swal.fire("error", "error en el servidor", "error");
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
          to="/itnl/recuperar-password"
          className="text-xs font-semibold text-red-700"
        >
          ¿Olvidaste tu contraseña?
        </NavLink>
      </div>
      <div className="mb-3 flex gap-2">
        <button
          disabled={validarCredencialesUsuario()}
          className="mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-500 px-3 py-1.5 rounded-md"
        >
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
              strokeWidth="1.5"
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
  );
};

export default FormLogin;
