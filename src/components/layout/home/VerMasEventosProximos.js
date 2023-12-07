import { Link } from "react-router-dom";
import eventosImagen from "../../../assets/img/eventos_proximos.jpg";

const VerMasEventosProximos = () => {
  return (
    <>
      <div className="container mx-auto lg:p-4 sm:p-2 p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-gradient-to-r from-blue-800 to-azul">
          <div className="p-6 flex flex-col justify-center items-center sm:flex-col">
            <h3 className="text-white">
              ¿Te gustaría ver más eventos próximos?
            </h3>
            <p className="text-white">Da clic en el siguiente botón</p>
            <Link
              to="/tecnl/eventos"
              className="hover:bg-gray-600 rounded rounded-md bg-grayTec px-3.5 py-2.5 text-sm font-semibold text-black inline-block mt-4"
            >
              Ver más
            </Link>
          </div>
          <div className="flex items-center justify-center sm:flex-row lg:p-6">
            <img
              src={eventosImagen}
              className="object-cover object-center w-full h-full sm:w-auto sm:h-auto"
              alt="imagen de eventos proximos"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerMasEventosProximos;
