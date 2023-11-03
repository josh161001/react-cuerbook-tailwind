import CabeceraPagina from "../../components/layout/home/CabeceraPagina";
import EventosPagina from "../../components/layout/EventosPagina";
import EventosProximosPagina from "../../components/layout/home/EventosProximosPagina";
import GruposPaginaPrincipal from "../../components/layout/home/GruposPaginaPrincipal";
import HeaderPagina from "../../components/layout/home/HeaderPagina";
import NoticiasPaginaPrincipal from "../../components/layout/home/NoticiasPaginaPrincipal";
import Footer from "../../components/layout/home/Footer";

const PaginaPrincipal = () => {
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
              <h2 className="text-3xl text-center font-bold  text-black-50 sm:text-4xl">
                Eventos Proximos
              </h2>
              <p className="mt-2 text-center text-lg leading-8 text-stone-500">
                En esta seccion se muestran los eventos proximos
              </p>
            </div>
            {/* Eventos inicia */}
            <EventosPagina />
            {/* finaliza evento */}

            {/* eventos finaliza */}
            {/* inicia ver mas eventos  */}
            <section className=" p-2 bg-gradient-to-r from-red-600 to-red-600 flex flex-col justify-center items-center text-center">
              <EventosProximosPagina />
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
