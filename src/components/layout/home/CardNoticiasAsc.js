import { useEffect, useState } from "react";
import urlAxios from "../../../config/axios";
import moment from "moment";
import { Link } from "react-router-dom";

const CardNoticiasAsc = ({ noticiaSeleccionadaId }) => {
  const [noticias, guardarNoticias] = useState([]);

  const consultarNoticias = async () => {
    try {
      const noticiasConsulta = await urlAxios.get("/notice/noticiasasc");
      const noticiasFiltradas = noticiasConsulta.data.data.filter((noticia) => {
        return noticia.status === true;
      });
      guardarNoticias(noticiasFiltradas);
    } catch (error) {
      console.error("Error al consultar las noticias:", error);
    }
  };

  useEffect(() => {
    consultarNoticias();
  }, []);

  return (
    <>
      {noticias.map((noticia) => {
        if (noticia.id === noticiaSeleccionadaId) {
          return null; // No renderizar la noticia seleccionada
        }

        const { id, name, user, createdAt, imagen } = noticia;
        return (
          <div
            className="rounded overflow-hidden shadow-lg grid lg:grid-cols-10"
            key={name}
          >
            <div className="md:col-span-5">
              <img
                className="h-full w-full object-cover object-center"
                src={imagen}
                alt="Imagen de la noticia"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="md:col-span-5 lg:pt-4 p-3">
              <div className="font-bold text-2xl mb-2">{name}</div>
              <div>
                {user && <p className="text-gray-600 text-sm">{user.name}</p>}
              </div>
              <div>
                <p className="text-gray-600 text-sm pb-4">
                  {moment(createdAt).format("ll")}
                </p>
              </div>

              <div>
                <Link to={`/tecnl/noticia/${id}`}>
                  <button className="bg-azul hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Leer más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardNoticiasAsc;
