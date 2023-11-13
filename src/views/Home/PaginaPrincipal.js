import CabeceraPagina from "../../components/layout/home/CabeceraPagina";
import EventosPagina from "../../components/layout/EventosPagina";
import EventosProximosPagina from "../../components/layout/home/EventosProximosPagina";
import GruposPaginaPrincipal from "../../components/layout/home/GruposPaginaPrincipal";
import HeaderPagina from "../../components/layout/home/HeaderPagina";
import NoticiasPaginaPrincipal from "../../components/layout/home/NoticiasPaginaPrincipal";
import Footer from "../../components/layout/home/Footer";
import { useEffect, useState } from "react";
import urlAxios from "../../config/axios";
import { Link } from "react-router-dom";
import EventosPasadosPagina from "../../components/layout/EventosPasadosPagina";

const PaginaPrincipal = () => {
  const [grupos, datoGrupo] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const consultarGrupos = async () => {
    const gruposConsulta = await urlAxios.get(`/groups/populares`);
    console.log(gruposConsulta.data.data);
    datoGrupo(gruposConsulta.data.data);
  };
  useEffect(() => {
    consultarGrupos();
  }, []);

  return (
    <>
      <div>
        <div className="bg-black">
          <HeaderPagina />
          <CabeceraPagina />
        </div>
        <main>
          {/* eventos proximos */}
          <div>
            <div className="pt-9">
              <h2 className="text-3xl animate__fadeInUp text-center font-bold  text-black-50 sm:text-4xl">
                Eventos Proximos
              </h2>
              <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                En esta seccion se muestran los eventos proximos
              </p>
              <EventosPagina />
            </div>
            <div className="pt-4">
              <h2 className="text-3xl animate__fadeInUp text-center font-bold  text-black-50 sm:text-4xl">
                Eventos Pasados
              </h2>
              <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                En esta seccion se muestran los eventos pasados
              </p>
              <EventosPasadosPagina />
            </div>

            <section className=" p-2 bg-gradient-to-r animate__fadeInTopLeft from-azul to-blue-800 flex flex-col justify-center items-center text-center">
              <EventosProximosPagina />
            </section>

            <section>
              <div className="pt-9">
                <h2 className="text-3xl text-center font-bold  text-black-50 sm:text-4xl">
                  Grupos populares
                </h2>
                <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                  En esta seccion se muestran los grupos mas populares
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 sm:p-10">
                {/* inicia grupos */}
                {grupos.map((grupo) => (
                  <Link to={`/admin/grupo/${grupo.id}`}>
                    <div className="relative grid h-[30rem] w-full max-w-[25rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                      <div
                        className="absolute inset-0 m-0 h-full w-full bg-cover overflow-hidden rounded-none"
                        style={{
                          backgroundImage: `url(${grupo.imagen})`,
                          backgroundPosition: "center",
                        }}
                      >
                        {" "}
                        <div className="absolute inset-0 w-full h-full to-bg-black-30 bg-gradient-to-t from-black/70 via-black/80"></div>
                      </div>
                      <div className="relative p-10 px-6 py-14 md:px-10">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white ">
                          {grupo.name}
                        </h2>
                        {grupo && grupo.user && (
                          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            {grupo.user.name}
                          </h5>
                        )}

                        {grupo && grupo.user && (
                          <img
                            alt="Perfil de usuario"
                            src={grupo.user.imagen}
                            className="relative inline-block  w-20 rounded-full border-2 border-gray-600 object-cover object-center"
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                ))}

                {/* finaliza grupo */}
              </div>
            </section>
            {/* finaliza ver mas eventos */}
            <section>
              <GruposPaginaPrincipal />
            </section>

            <section>
              <NoticiasPaginaPrincipal />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PaginaPrincipal;
