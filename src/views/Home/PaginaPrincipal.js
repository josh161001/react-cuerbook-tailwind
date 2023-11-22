import CabeceraPagina from "../../components/layout/home/CabeceraPagina";
import HeaderPagina from "../../components/layout/home/HeaderPagina";
import EventosProximos from "../../components/layout/home/EventosProximos";
import EventosPasados from "../../components/layout/home/EventosPasados";
import VerMasEventosProximos from "../../components/layout/home/VerMasEventosProximos";
import GruposPopulares from "../../components/layout/home/GruposPopulares";
import GruposPaginaPrincipal from "../../components/layout/home/GruposPaginaPrincipal";
import NoticiasPaginaPrincipal from "../../components/layout/home/NoticiasPaginaPrincipal";
import Footer from "../../components/layout/home/Footer";

import { useEffect } from "react";
import BotonFlotanteArriba from "../../components/common/BotonFlotanteArriba";

const PaginaPrincipal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <BotonFlotanteArriba />

        <div className="bg-black">
          <HeaderPagina />
          <CabeceraPagina />
        </div>
        <main>
          <div>
            {/* inicia seccion eventos proximos */}

            <div className="pt-9">
              <h2 className="text-3xl text-center font-bold  text-black-50 sm:text-4xl">
                Eventos Proximos
              </h2>
              <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                En esta seccion se muestran los eventos proximos
              </p>
              <EventosProximos />
            </div>
            {/* finaliza seccion eventos proximos */}
            {/* inicia seccion de eventos pasados */}
            <div className="pt-4">
              <h2 className="text-3xl text-center font-bold  text-black-50 sm:text-4xl">
                Eventos Pasados
              </h2>
              <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                En esta seccion se muestran los eventos pasados
              </p>
              <EventosPasados />
              {/* finaliza seccion de eventos pasados */}
            </div>

            {/* inicia seccion de ver mas eventos proximos */}
            <section className=" p-2 bg-gradient-to-r animate__fadeInTopLeft from-azul to-blue-800 flex flex-col justify-center items-center text-center">
              <VerMasEventosProximos />
            </section>
            {/* finaliza seccion de ver mas eventos proximos */}

            <section>
              <div className="pt-9">
                <h2 className="text-3xl text-center font-bold  text-black-50 sm:text-4xl">
                  Grupos populares
                </h2>
                <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                  En esta seccion se muestran los grupos mas populares
                </p>
              </div>
              {/* inicia seccion grupo populares */}
              <div className="grid text- grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 sm:p-10">
                <GruposPopulares />
              </div>
              {/* finaliza seccion grupo populares */}
            </section>

            {/* inicia seccion grupos pagina Principal */}
            <section>
              <GruposPaginaPrincipal />
            </section>
            {/* finaliza seccion grupos pagina Principal */}

            {/* inicia seccion noticias pagina Principal */}
            <section>
              <NoticiasPaginaPrincipal />
            </section>
            {/* finaliza seccion noticias pagina Principal */}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PaginaPrincipal;
