import { useContext, useEffect, useState } from "react";
import urlAxios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { CuerbookContext } from "../../context/CuerbookContext";

const TableUser = (props) => {
  const [usuarios, guardarUsuarios] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [usuarioPorPagina] = useState(3);
  const [tokenCargando, setTokenCargando] = useState(false);

  const [auth, guardarAuth] = useContext(CuerbookContext);
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
      navigate("/itnl/iniciar-sesion");
    }
  }, [navigate, guardarAuth]);

  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem("access_token");

      if (token) {
        try {
          const dataConsulta = await urlAxios.get("/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          guardarUsuarios(dataConsulta.data.data);
        } catch (error) {
          if (error.response && error.response.status === 500) {
            navigate("/itnl/iniciar-sesion");
          }
        }
      }
    };
    getUsers();
  }, [navigate]);

  if (!tokenCargando) {
    return <Spinner />;
  }

  const indexDeUltimoUsuario = paginaActual * usuarioPorPagina;
  const indexDelPrimerUsuario = indexDeUltimoUsuario - usuarioPorPagina;
  const usuariosActuales = usuarios.slice(
    indexDelPrimerUsuario,
    indexDeUltimoUsuario
  );

  const totalPaginas = Math.ceil(usuarios.length / usuarioPorPagina);

  const pagina = (numeroDePagina) => {
    if (numeroDePagina >= 1 && numeroDePagina <= totalPaginas) {
      setPaginaActual(numeroDePagina);
    }
  };

  return (
    <>
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Imagen
              </th>
              <th scope="col" className="px-6 py-3">
                Estatus
              </th>
              <th scope="col" className="px-6 py-3">
                Rol
              </th>
              <th scope="col" className="px-6 py-4">
                Modificaciones
              </th>
              <th scope="col" className="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            {usuariosActuales.map((cliente, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4"></td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {cliente.name}
                </th>
                <td className="px-6 py-4">{cliente.email}</td>
                <td className="px-6 py-4">
                  <img
                    src={cliente.imagen}
                    alt="Imagen de perfil"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="px-6 py-4">{`${cliente.status}`}</td>
                <td className="px-6 py-4">{cliente.roles.join(", ")}</td>
                <td className="px-6 text-center py-4">{cliente.modified}</td>
                <td className=" items-center px-4 py-4 space-x-3">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Editar
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Paginación */}
      <div className="flex items-center justify-center mb-4 mt-4">
        {Array.from({ length: totalPaginas }).map((_, index) => (
          <button
            key={index}
            onClick={() => pagina(index + 1)}
            className={`px-3 py-2 ${
              paginaActual === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } mx-1 rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default TableUser;
