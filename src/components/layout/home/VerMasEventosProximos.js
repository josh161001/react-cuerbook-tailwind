import { Link } from "react-router-dom";
import eventosImagen from "../../../assets/img/eventos.png";

const VerMasEventosProximos = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 bg-gradient-to-r from-blue-800  to-azul ">
          <div className="p-6 flex flex-col justify-center items-center">
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
          <div className="flex items-center justify-center">
            <img
              src={eventosImagen}
              className="object-cover w-full h-full"
              alt="imagen de eventos proximos"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerMasEventosProximos;
