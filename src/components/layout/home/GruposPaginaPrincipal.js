import { Link } from "react-router-dom";
import imagen1 from "../../../assets/img/Imagen_ejemplos (1).jpg";
import imagen2 from "../../../assets/img/Imagen_ejemplos (2).jfif";
import imagen3 from "../../../assets/img/Imagen_ejemplos (4).jpg";
import imagen4 from "../../../assets/img/Imagen_ejemplos (6).jpg";

const GruposPaginaPrincipal = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 bg-azul">
        {/* galeria */}
        <div>
          <div className="grid lg:grid-cols-2 lg:w-full lg:grid-cols-4 md:grid-cols-2 md:p-2 md:gap-2  sm:grid lg:gap-2 lg:m-4 lg:ml-48">
            <div className="grid lg:gap-2 md:gap-2">
              <div className="flex justify-center">
                <img
                  className="lg:h-48 md:h-64 sm:h-16 w-full"
                  src={imagen1}
                  alt="grupo de estudiantes"
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="lg:h-36 md:h-64 sm:h-16 w-full"
                  src={imagen3}
                  alt="grupo de estudiantes"
                />
              </div>
            </div>
            <div className="grid lg:gap-2 md:gap-2">
              <div className="flex justify-center">
                <img
                  className="lg:h-36 md:h-64 sm:h-16 w-full"
                  src={imagen2}
                  alt="grupo de estudiantes"
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="lg:h-48 md:h-64 sm:h-16 w-full"
                  src={imagen4}
                  alt="grupo de estudiantes"
                />
              </div>
            </div>
          </div>
        </div>

        {/* grupos informacion */}
        <div className="bg-grayTec mt-10 lg:rounded-lg mb-10">
          <div className="m-8">
            <h3 className="uppercase font-bold text-2xl">Ingresa a un grupo</h3>
            <p>
              Ingresa a un grupo para conocer más acerca de los <br /> nuevos
              eventos próximos exclusivos a realizarse.
            </p>
            <p className="pt-4">Eventos exclusivos</p>
            <p>Para cada participante</p>
            <p className="pt-4">Diversidad de actividades</p>
            <p>Para todo estudiante</p>
            <Link
              to="/tecnl/grupos"
              className="hover:bg-blue-700 rounded rounded-md bg-azul px-3.5 py-2.5 text-sm font-semibold text-white inline-block mt-4"
            >
              Saber más
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GruposPaginaPrincipal;
