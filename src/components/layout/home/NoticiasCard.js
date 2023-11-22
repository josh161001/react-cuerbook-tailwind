import React, { useEffect, useState } from "react";
import urlAxios from "../../../config/axios";
import { Link } from "react-router-dom";

const NoticiasCard = () => {
  const [noticias, guardarNoticias] = useState([]);

  const consultarNoticias = async () => {
    const noticiasConsulta = await urlAxios.get("/notice/noticiasdesc");

    const noticiasFiltradas = noticiasConsulta.data.data.filter((noticia) => {
      return noticia.status === true;
    });

    // console.log(noticiasFiltradas);
    guardarNoticias(noticiasFiltradas);
  };

  useEffect(() => {
    consultarNoticias();
  }, []);

  const limpiarTrix = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    Array.from(doc.body.getElementsByTagName("strong")).forEach((strong) => {
      strong.outerHTML = strong.innerHTML;
    });
    return doc.body.innerHTML;
  };

  if (!noticias.length) {
    return <h1 className="text-center text-3xl pt-4">No hay noticias</h1>;
  }

  return (
    <>
      <div className="flex grid lg:grid-cols-3 flex-col lg:gap-4 gap-4 p-4  sm:p-10 md:grid md:grid-cols-2 md:gap-6 sm:flex-row">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className="block lg:max-w-[20rem] md:max-w-[20rem]  sm:max-w-[20rem] bg-transparent"
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat  h-64">
              <Link to={`/tecnl/noticia/${noticia.id}`}>
                <img
                  className="w-full h-full object-cover"
                  src={noticia.imagen}
                  alt="imagen de noticia"
                />
              </Link>
            </div>
            <div className="pt-2">
              <h5 className="text-2xl font-semibold leading-tight text-dark">
                {noticia.name.length > 50
                  ? noticia.name.slice(0, 120) + "..."
                  : noticia.name}
              </h5>
              <p
                className="pt-text-dark text-1xl"
                dangerouslySetInnerHTML={{
                  __html:
                    noticia.description.length > 90
                      ? limpiarTrix(noticia.description.slice(0, 120) + "...")
                      : limpiarTrix(noticia.description),
                }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoticiasCard;
