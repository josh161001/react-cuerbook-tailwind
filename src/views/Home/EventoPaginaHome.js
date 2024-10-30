import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import urlAxios from "../../config/axios";
import HeaderPagina from "../../components/layout/home/HeaderPagina";
import moment from "moment";
import Footer from "../../components/layout/home/Footer";
import BotonFlotanteArriba from "../../components/common/BotonFlotanteArriba";

const EventoPaginaHome = () => {
  const [evento, guardarEvento] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const consultarEvento = async () => {
      const eventoConsulta = await urlAxios.get(`/events/${id}`);

      console.log(eventoConsulta.data.data);
      guardarEvento(eventoConsulta.data.data);
    };

    consultarEvento();
  }, [id]);

  console.log("prueba", evento.imagen);
  const backgroundStyle = {
    backgroundImage:
      evento && evento.imagen ? `url(${encodeURI(evento.imagen)})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  const overlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
  };

  return (
    <>
      <div style={backgroundStyle}>
        <div style={overlayStyle}></div>
        <BotonFlotanteArriba />
        <HeaderPagina />
        <div className="relative isolate px-6 pt-26 lg:pt-36 lg:px-8">
          <div className="mx-auto py-36 sm:py-42 lg:py-16">
            <div className="">
              <h1 className="text-2xl font-bold tracking-tight text-stone-50 sm:text-3xl">
                {evento.name}
              </h1>
              <div className="flex items-center mt-4 text-white text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                </svg>
                {evento && evento.user && (
                  <Link
                    to={`/tecnl/usuario-perfil/${evento.user.id}`}
                    className="leading-8 hover:text-azul hover:font-semibold"
                  >{`Organizado por ${evento.user.department}`}</Link>
                )}
              </div>
              <div className="flex items-center mt-4 text-white text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="leading-8">
                  {moment(evento.fecha).format("LLLL")}
                </p>
              </div>
              <div className="flex items-center mt-4 text-white text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="leading-8">{evento.lugar}</p>
              </div>
              <div className="mt-40 flex items-center justify-center">
                <a
                  href="#evento"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#evento")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-transparent text-white border border-white py-2 px-4 rounded hover:bg-grayTec hover:text-white hover:border-stone-500 transition duration-300"
                >
                  Ver mas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:p-6 lg:m-6 gap-6 px-6 lg:px-8 mt-6">
        <div className="m-6" id="evento">
          <h2 className="text-3xl pb-2">Acerca del evento</h2>
          <div
            className="border-l-2 border-azul pl-4 pt-4"
            dangerouslySetInnerHTML={{ __html: evento.description }}
          ></div>
        </div>
        <div>
          <div>
            <div className="px-4 sm:px-0">
              <h3 className="text-3xl leading-7 text-black">
                Información del evento
              </h3>
            </div>
            <div className="mt-6 border-t border-azul">
              <dl className="divide-y divide-gray-200">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Fecha:
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {moment(evento.fecha).format("LLLL")}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-black">
                    Ubicación:
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {evento.lugar}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Cupo:
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {evento.cupo} personas
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Categoría:
                  </dt>
                  {evento && evento.Categories && (
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {evento.Categories.name}
                    </dd>
                  )}
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventoPaginaHome;
