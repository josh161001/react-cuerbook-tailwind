import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      } else {
        navigate("/itnl/iniciar-sesion");
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

  if (!tokenCargando || !auth.auth) {
    return <Spinner />;
  }

  return (
    <div className="flex items-center">
      <div className="flex items-center pr-4 ml-3">
        <div>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
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
          } mt-72  mr-.5 right-0  divide-y rounded shadow bg-gray-700 divide-gray-600`}
          id="dropdown-user"
        >
          <div className="px-4 py-3"></div>
          <ul className="py-1">
            <li className="block px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-600 hover:text-white">
              {usuario.name}
            </li>
            <li className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white">
              {usuario.department}
            </li>
            <li className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white">
              {usuario.email}
            </li>
            <li>
              <Link
                to={`/admin/configuracion-cuenta/${usuario.id}`}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
              >
                Configuracion de cuenta
              </Link>
            </li>
            <li>
              <Link
                to={`/admin/actualizar-password/${usuario.id}`}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
              >
                Actualizar contraseña
              </Link>
            </li>

            <li>
              <a
                onClick={CerrarSesionNav}
                className="block px-4 py-2 text-sm text-gray-300 cursor-pointer hover:bg-gray-600 hover:text-white"
              >
                Cerrar sesion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavUser;
