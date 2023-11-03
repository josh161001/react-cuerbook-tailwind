import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CuerbookContext } from "../../../context/CuerbookContext";
import urlAxios from "../../../config/axios";
import { Spinner } from "flowbite-react";

const NavUser = () => {
  const [usuario, guardarUsuario] = useState({});

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
      navigate("/itnl/pagina-principal");
    }
  }, [navigate, guardarAuth]);

  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const dataConsulta = await urlAxios.get("/auth/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          guardarUsuario(dataConsulta.data.rest);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            navigate("/itnl/iniciar-sesion");
          }
        }
      }
    };
    getUsers();
  }, [navigate, usuario]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const CerrarSesionNav = () => {
    localStorage.removeItem("access_token");
    navigate("/itnl/iniciar-sesion");
  };

  if (!tokenCargando) {
    return <Spinner />;
  }

  return (
    <div className="flex items-center">
      <div className="flex items-center pr-5 ml-3">
        <div>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <img
              className="w-8 h-8 rounded-full"
              src={usuario.imagen}
              alt="perfil usuario"
            />
          </button>
        </div>
        <div
          className={`absolute z-50 ${
            isDropdownOpen ? "block" : "hidden"
          } mt-60 mr-.5 right-0 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
          id="dropdown-user"
        >
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"></p>
          </div>
          <ul className="py-1">
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
              {usuario.email}
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Configuracion de cuenta
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Actualizar contraseña
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={CerrarSesionNav}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Cerrar sesion{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavUser;
