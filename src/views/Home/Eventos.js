import { useEffect, useState } from "react";
import CabeceraPagina from "../../components/layout/home/CabeceraPagina";
import HeaderPagina from "../../components/layout/home/HeaderPagina";
import Footer from "../../components/layout/home/Footer";
import Spinner from "../../components/layout/Spinner";
import urlAxios from "../../config/axios";
import moment from "moment";

const Eventos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [eventos, guardarEventos] = useState([]);

  const limpiarTrix = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    Array.from(doc.body.getElementsByTagName("strong")).forEach((strong) => {
      strong.outerHTML = strong.innerHTML;
    });
    return doc.body.innerHTML;
  };

  const consultarEventosProximos = async () => {
    const evento = await urlAxios.get("/events");
    const eventosPorCategoria = evento.data.data.reduce(
      (categorias, evento) => {
        const categoria = evento.Categories.name;
        if (!categorias[categoria]) {
          categorias[categoria] = [];
        }
        categorias[categoria].push(evento);
        return categorias;
      },
      {}
    );
    guardarEventos(eventosPorCategoria);
  };

  useEffect(() => {
    consultarEventosProximos();
  }, []);

  if (!eventos) {
    return <Spinner />;
  }
  return (
    <>
      <div className="bg-black">
        <HeaderPagina />
        <CabeceraPagina />
      </div>
      {Object.keys(eventos).map((categoria, index) => (
        <div key={index}>
          <h2 className="text-3xl font-bold text-center pt-4 italic">
            <span className="bg-red-400 pl-2 pr-2 pt-2 pb-2">{categoria}</span>
          </h2>

          <div className="flex lg:grid lg:grid-cols-3 flex-col lg:gap-0 gap-2 p-4 sm:p-10 md:grid md:grid-cols-2 md:gap-6 sm:flex-row">
            {eventos[categoria].map((evento, index) => (
              <div
                key={index}
                className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg"
              >
                <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
                <img
                  src={evento.imagen}
                  className="object-cover bg-no-repeat w-full h-94 lg:h-80"
                />

                <div className="absolute inset-0 flex flex-col justify-end m-4">
                  <h6 className="text-red-700 uppercase font-bold mb-1">
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
                    <a
                      href="#"
                      className="hover:bg-red-500 px-4 rounded rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white"
                    >
                      Ver más
                    </a>
                    <p className="text-white pt-4 text-sm">
                      {moment(evento.createdAt).fromNow()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};
export default Eventos;
