import CabeceraPagina from "../../components/layout/CabeceraPagina";
import EventosPagina from "../../components/layout/EventosPagina";
import EventosProximosPagina from "../../components/layout/EventosProximosPagina";
import HeaderPagina from "../../components/layout/HeaderPagina";

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
            <div className="flex sm:grid grid-cols-3 flex-col gap-2 p-4 sm:p-10  md:flex-row">
              <EventosPagina />
              {/* finaliza evento */}
            </div>
            {/* eventos finaliza */}
            {/* inicia ver mas eventos  */}
            <section className=" p-2 bg-gradient-to-r from-red-600 to-red-600 flex flex-col justify-center items-center text-center">
              <EventosProximosPagina />
            </section>

            {/* finaliza ver mas eventos */}
          </div>
        </main>
      </div>
    </>
  );
};

export default PaginaPrincipal;
