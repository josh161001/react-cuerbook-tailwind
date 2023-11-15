import { useEffect, useState } from "react";
import urlAxios from "../../config/axios";
import moment from "moment";
import { Link } from "react-router-dom";
const EventosPagina = () => {
  const [eventos, guardarEventos] = useState([]);

  const consultarEventosProximos = async () => {
    const evento = await urlAxios.get("/events/proximos");
    const eventosProximosActivos = evento.data.data.filter(
      (evento) => evento.status === true
    );
    guardarEventos(eventosProximosActivos);
  };

  useEffect(() => {
    consultarEventosProximos();
  }, [eventos]);

  const limpiarTrix = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    Array.from(doc.body.getElementsByTagName("strong")).forEach((strong) => {
      strong.outerHTML = strong.innerHTML;
    });
    return doc.body.innerHTML;
  };

  if (!eventos.length) {
    return <h1 className="text-center text-3xl">No hay eventos proximos</h1>;
  }

  return (
    <div className="flex lg:grid lg:grid-cols-3 flex-col lg:gap-4 gap-4 p-4  sm:p-10 md:grid md:grid-cols-2 md:gap-6 sm:flex-row">
      {eventos.map((evento, index) => (
        <div
          key={index}
          className="max-w-md mx-auto relative rounded-lg overflow-hidden  shadow-lg"
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
              {evento.name}
            </h2>
            <p className="text-gray-400 text-sm italic mb-1">
              Por {evento.user.name}
            </p>
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
                to={`/itnl/evento/${evento.id}`}
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
  );
};

export default EventosPagina;
