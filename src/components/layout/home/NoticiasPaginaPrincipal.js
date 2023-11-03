import NoticiasCard from "./NoticiasCard";

const NoticiasPaginaPrincipal = () => {
  return (
    <div className="bg-claro">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-6 lg:pt-10 pb-4 ">
          <h2 className="text-3xl font-semibold ">Conoce Mas</h2>

          <p className="pt-2">
            Conoce mas acerca de lo que opcurre dentro del instituto <br />
            Tecnologico de Nuevo Leon
          </p>
        </div>
        <div className="pb-10 lg:pt-6 ">
          <NoticiasCard />
        </div>
      </div>
    </div>
  );
};

export default NoticiasPaginaPrincipal;
