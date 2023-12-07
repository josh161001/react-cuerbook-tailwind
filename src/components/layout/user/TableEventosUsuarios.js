import { useContext, useEffect, useState } from "react";
import urlAxios from "../../../config/axios";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import { CuerbookContext } from "../../../context/CuerbookContext";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/es";
import { saveAs } from "file-saver";

const TableEventosUsuarios = (props) => {
  const [eventos, guardarEventos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [eventoPorPagina] = useState(3);
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
    const getEvento = async () => {
      const token = localStorage.getItem("access_token");

      if (token) {
        try {
          const dataConsulta = await urlAxios.get("/events/evento-usuario", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          guardarEventos(dataConsulta.data);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            navigate("/itnl/iniciar-sesion");
          }
        }
      }
    };
    getEvento();
  }, [navigate, eventos]);

  const eliminarEvento = async (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Ya no se podra recuperar el evento",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      const token = localStorage.getItem("access_token");
      if (result.isConfirmed) {
        urlAxios.delete(`/events/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    });
  };
  const indexUltimoEvento = paginaActual * eventoPorPagina;
  const indexPrimerEvento = indexUltimoEvento - eventoPorPagina;
  const eventosActuales = eventos.slice(indexPrimerEvento, indexUltimoEvento);

  const totalPaginas = Math.ceil(eventos.length / eventoPorPagina);

  const pagina = (numeroDePagina) => {
    if (numeroDePagina >= 1 && numeroDePagina <= totalPaginas) {
      setPaginaActual(numeroDePagina);
    }
  };
  const limpiarTrix = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    Array.from(doc.body.getElementsByTagName("strong")).forEach((strong) => {
      strong.outerHTML = strong.innerHTML;
    });
    return doc.body.innerHTML;
  };

  const getPdf = async (eventoId) => {
    const token = localStorage.getItem("access_token");

    const pdfResponse = await urlAxios.get(`/pdf/generate-pdf/${eventoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "arraybuffer",
    });

    const fileName = `solicitud_evento_${eventoId}.pdf`;
    const pdfBlob = new Blob([pdfResponse.data], {
      type: "application/pdf",
    });
    pdfBlob.name = fileName;

    saveAs(pdfBlob, fileName);

    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  if (!tokenCargando || !eventos.length || !auth.auth) {
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
                Evento
              </th>
              <th scope="col" className="px-6 py-3">
                Imagen
              </th>
              <th scope="col" className="px-6 py-3">
                Cupo
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                Lugar
              </th>
              <th scope="col" className="px-6 py-3">
                Descrippcion
              </th>
              <th scope="col" className="px-6 py-3">
                Detalles
              </th>
              <th scope="col" className="px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3">
                Estatus
              </th>
              <th scope="col" className="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            {eventosActuales.map((evento, index) => (
              <tr
                key={evento.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4"></td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap  dark:text-white"
                >
                  {evento.name}
                </th>
                <td className="px-4 py-4 whitespace-nowrap ">
                  <img
                    src={evento.imagen}
                    alt="Imagen de perfil"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="px-6 py-4">{evento.cupo}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {moment(evento.fecha).locale("es").format("LLLL a")}
                </td>
                <td className="px-6 py-4  whitespace-nowrap ">
                  {evento.lugar}
                </td>

                <td
                  className="px-6 py-4  whitespace-nowrap"
                  dangerouslySetInnerHTML={{
                    __html:
                      evento.description.length > 40
                        ? limpiarTrix(evento.description.slice(0, 60) + "...")
                        : limpiarTrix(evento.description),
                  }}
                ></td>
                <td className="px-6 py-4  whitespace-nowrap ">
                  {evento.detalles > 40
                    ? evento.detalles.slice(0, 40) + "..."
                    : evento.detalles}
                </td>
                <td className="px-6 py-4"> {evento.Categories.name}</td>
                <td className="px-6 py-4  whitespace-nowrap ">
                  <span
                    className={`inline-block  whitespace-nowrap px-1 py-1 rounded-lg text-white ${
                      evento.status ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {evento.status ? "Activo" : "Inactivo"}
                  </span>
                </td>

                <td className=" items-center flex pt-9 px-4 py-4 space-x-3">
                  {/* editar */}
                  <button
                    onClick={() => getPdf(evento.id)}
                    className="inline-block px-1 py-1 rounded-lg bg-grayTec  font-medium text-white hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                    </svg>
                  </button>
                  <Link
                    to={`/usuario/evento/${evento.id}`}
                    className="inline-block px-1 py-1 rounded-lg bg-blue-900  font-medium text-red-600 dark:text-blue-500 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path
                        fillRule="evenodd"
                        d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  {/* eliminar */}
                  <button
                    onClick={() => eliminarEvento(evento.id)}
                    className="inline-block px-1 py-1 rounded-lg bg-red-900 font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Paginación */}
      <div className="flex items-center justify-center mb-2 mt-3">
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

export default TableEventosUsuarios;
