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
            {/* Inicia sección eventos próximos */}
            <div className="pt-9">
              <h2 className="text-3xl text-center font-bold text-black-50 sm:text-4xl">
                Eventos próximos
              </h2>
              <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                En esta sección se muestran los eventos próximos
              </p>
              <EventosProximos />
            </div>
            {/* Finaliza sección eventos próximos */}

            {/* Inicia sección de eventos pasados */}
            <div className="pt-4">
              <h2 className="text-3xl text-center font-bold text-black-50 sm:text-4xl">
                Eventos pasados
              </h2>
              <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                En esta sección se muestran los eventos pasados
              </p>
              <EventosPasados />
            </div>
            {/* Finaliza sección de eventos pasados */}

            {/* Inicia sección de ver más eventos próximos */}
            <section className="p-2 bg-gradient-to-r animate__fadeInTopLeft from-azul to-blue-800 flex flex-col justify-center items-center text-center">
              <VerMasEventosProximos />
            </section>
            {/* Finaliza sección de ver más eventos próximos */}

            <section>
              <div className="pt-9">
                <h2 className="text-3xl text-center font-bold text-black-50 sm:text-4xl">
                  Grupos populares
                </h2>
                <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                  En esta sección se muestran los grupos más populares
                </p>
              </div>
              {/* Inicia sección grupos populares */}
              <div>
                <GruposPopulares />
              </div>
              {/* Finaliza sección grupos populares */}
            </section>

            {/* Inicia sección grupos página Principal */}
            <section>
              <GruposPaginaPrincipal />
            </section>
            {/* Finaliza sección grupos página Principal */}

            {/* Inicia sección noticias página Principal */}
            <section>
              <NoticiasPaginaPrincipal />
            </section>
            {/* Finaliza sección noticias página Principal */}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PaginaPrincipal;
