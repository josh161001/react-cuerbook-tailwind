import { useEffect, useState } from "react";
import CabeceraPagina from "../../components/layout/home/CabeceraPagina";
import HeaderPagina from "../../components/layout/home/HeaderPagina";
import Footer from "../../components/layout/home/Footer";
import urlAxios from "../../config/axios";
import moment from "moment";
import { Link } from "react-router-dom";
import BotonFlotanteArriba from "../../components/common/BotonFlotanteArriba";

const Eventos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [eventos, guardarEventos] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroNombre, setFiltroNombre] = useState("");

  const consultarEventosProximos = async () => {
    const evento = await urlAxios.get("/events");
    console.log(eventos);
    const eventosActivos = evento.data.data.filter(
      (evento) => evento.status === true
    );

    const eventosPorCategoria = eventosActivos.reduce((categorias, evento) => {
      const categoria = evento.Categories.name;
      if (!categorias[categoria]) {
        categorias[categoria] = [];
      }
      categorias[categoria].push(evento);
      return categorias;
    }, {});
    guardarEventos(eventosPorCategoria);
  };

  useEffect(() => {
    consultarEventosProximos();
  }, []);

  const categorias = [
    ...new Set(
      Object.values(eventos)
        .flat()
        .map((evento) => evento.Categories.name)
    ),
  ];

  const eventosFiltrados = Object.values(eventos)
    .flat()
    .filter(
      (evento) =>
        (evento.Categories.name.includes(filtroCategoria) ||
          filtroCategoria === "") &&
        (evento.name.includes(filtroNombre) || filtroNombre === "")
    );

  const limpiarTrix = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    Array.from(doc.body.getElementsByTagName("strong")).forEach((strong) => {
      strong.outerHTML = strong.innerHTML;
    });
    return doc.body.innerHTML;
  };

  return (
    <>
      <div className="bg-black">
        <HeaderPagina />
        <CabeceraPagina />
      </div>
      <BotonFlotanteArriba />

      <div className="flex flex-col pt-4 justify-center sm:flex-row">
        <div className="p-2">
          <input
            className="p-2 w-full rounded border focus:ring-azul border-grayTec "
            type="text"
            placeholder="Buscar por evento..."
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
          />
        </div>

        {["Todos los eventos", ...categorias].map((categoria, index) => (
          <button
            key={index}
            className={`m-2 py-2 px-4 rounded ${
              filtroCategoria ===
              (categoria === "Todos los eventos" ? "" : categoria)
                ? "bg-azul text-white"
                : "bg-white text-azul"
            }`}
            onClick={() =>
              setFiltroCategoria(
                categoria === "Todos los eventos" ? "" : categoria
              )
            }
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="flex lg:grid lg:grid-cols-3 flex-col lg:gap-6 gap-4 p-4 sm:p-10 md:grid md:grid-cols-2 md:gap-6 sm:flex-row">
        {eventosFiltrados.map((evento, index) => (
          <div
            key={index}
            className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg"
          >
            <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
            <img
              src={evento.imagen}
              className="object-cover bg-no-repeat w-full h-96 lg:h-80"
              alt="imagen de evento"
            />

            <div className="absolute inset-0 flex flex-col justify-end m-4">
              <h6 className="text-azul uppercase font-bold mb-1">
                {evento.Categories.name}
              </h6>
              <h2 className="text-white text-2xl font-bold mb-1">
                {evento.name.length > 40
                  ? evento.name.slice(0, 50) + "..."
                  : evento.name}
              </h2>
              <Link to={`/tecnl/usuario-perfil/${evento.user.id}`}>
                <p className="text-gray-400 hover:text-azul hover:font-semibold text-sm italic mb-1">
                  Por {evento.user.department}
                </p>
              </Link>

              <p
                className="text-white text-base mb-2"
                dangerouslySetInnerHTML={{
                  __html:
                    evento.description.length > 90
                      ? limpiarTrix(evento.description.slice(0, 90) + "...")
                      : limpiarTrix(evento.description),
                }}
              ></p>

              <div className="flex justify-between pt-1">
                <Link
                  to={`/tecnl/evento/${evento.id}`}
                  className="hover:bg-blue-700 px-4 rounded rounded-md bg-azul px-3.5 py-2.5 text-sm font-semibold text-white"
                >
                  Ver más
                </Link>
                <p className="text-white pt-4 text-sm">
                  {moment(evento.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default Eventos;
