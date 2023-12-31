import BotonVerNoticias from "../../../components/common/BotonVerNoticias";
import BotonEventosProximos from "../../../components/common/BotonEventosProximos";

const CabeceraPagina = () => {
  return (
    <div className="relative isolate px-6 pt-26 lg:pt-48 lg:px-8">
      <div className="mx-auto max-w-2xl py-28 sm:py-42 lg:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-50 sm:text-6xl">
            Mantente al día con los eventos próximos a ocurrir en TECNL
          </h1>
          <p className="mt-6 text-1xl leading-8 text-grayTec">
            Verifica constantemente esta página para estar al tanto de los
            últimos eventos, grupos y noticias. Estamos aquí para mantenerte
            informado y conectado.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <BotonVerNoticias />
            <BotonEventosProximos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabeceraPagina;
