import { useContext, useEffect, useState } from "react";
import urlAxios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { CuerbookContext } from "../../context/CuerbookContext";

const TableUser = (props) => {
  // const [usuarios, guardarUsuarios] = useState([]);
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

  const consultarGetUsuarios = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      const consultarUsuarios = await urlAxios.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(consultarUsuarios);
    }
  };

  useEffect(() => {
    consultarGetUsuarios();
  }, []);

  // useEffect(() => {
  //   const getUsers = async () => {

  //     if (token) {
  //       try {
  //         const dataConsulta = await urlAxios.get("/users", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         guardarUsuarios(dataConsulta.data.data);
  //       } catch (error) {
  //         if (error.response && error.response.status === 401) {
  //           navigate("/itnl/iniciar-sesion");
  //         }
  //       }
  //     }

  //   getUsers();
  // }, [navigate]);

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

  if (!tokenCargando) {
    return <Spinner />;
  }

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
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-1 py-1 rounded-lg text-white ${
                      cliente.status ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {cliente.status ? "Activo" : "Inactivo"}
                  </span>
                </td>

                <td className="px-6 py-4">{cliente.roles.join(", ")}</td>
                <td className="px-6 text-center py-4">{cliente.modified}</td>
                <td className=" items-center flex pt-9 px-4 py-4 space-x-3">
                  <a
                    href="#"
                    className=" inline-block px-1 py-1 rounded-lg bg-sky-900 font-medium text-sky-300 dark:text-sky-300 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path
                        fill-rule="evenodd"
                        d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-block px-1 py-1 rounded-lg bg-blue-900  font-medium text-red-600 dark:text-blue-500 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                      <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-block px-1 py-1 rounded-lg bg-red-900 font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
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
