import eventosImagen from "../../assets/img/eventos.png";

const EventosProximosPagina = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 bg-gradient-to-r from-red-900  to-red-700 ">
          <div className="p-6 flex flex-col justify-center items-center">
            <h3 className="text-white">
              ¿Te gustaría ver más eventos próximos?
            </h3>
            <p className="text-white">Da clic en el siguiente botón</p>
            <a
              href="#"
              className="hover:bg-violet-900 rounded rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-violet inline-block mt-4"
            >
              Ver más
            </a>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={eventosImagen}
              className="object-cover w-full h-full"
              alt="Card Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventosProximosPagina;
