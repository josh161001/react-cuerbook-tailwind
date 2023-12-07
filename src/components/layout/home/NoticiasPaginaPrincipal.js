import NoticiasCard from "./NoticiasCard";

const NoticiasPaginaPrincipal = () => {
  return (
    <div className="p-6 pt-8 lg:pt-10 pb-4">
      <div className="">
        <h2 className="text-3xl font-semibold ">Descubre más</h2>
        <p className="pt-2 border-b pb-3">
          Explora más acerca de lo que sucede dentro del Instituto Tecnológico
          de Nuevo León.
        </p>
      </div>
      <NoticiasCard />
    </div>
  );
};

export default NoticiasPaginaPrincipal;
