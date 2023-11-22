import NoticiasCard from "./NoticiasCard";

const NoticiasPaginaPrincipal = () => {
  return (
    <div className="p-6 pt-8 lg:pt-10 pb-4">
      <div className="">
        <h2 className="text-3xl font-semibold ">Conoce Mas</h2>
        <p className="pt-2 border-b pb-3">
          Conoce mas acerca de lo que opcurre dentro del instituto <br />
          Tecnologico de Nuevo Leon
        </p>
      </div>
      <NoticiasCard />
    </div>
  );
};

export default NoticiasPaginaPrincipal;
