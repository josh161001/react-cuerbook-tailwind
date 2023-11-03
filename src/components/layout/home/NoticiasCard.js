import React, { useEffect, useState } from "react";
import urlAxios from "../../../config/axios";

const NoticiasCard = () => {
  const [noticias, guardarNoticias] = useState([]);

  const limpiarTrix = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    Array.from(doc.body.getElementsByTagName("strong")).forEach((strong) => {
      strong.outerHTML = strong.innerHTML;
    });
    return doc.body.innerHTML;
  };

  const consultarNoticias = async () => {
    try {
      const noticiasConsulta = await urlAxios.get("/notice/noticias");
      guardarNoticias(noticiasConsulta.data.data);
    } catch (error) {
      console.error("Error al consultar noticias:", error);
    }
  };

  useEffect(() => {
    consultarNoticias();
  }, []);

  return (
    <div className="grid gap-2 sm:grid-cols-1 sm:w-full md:grid-cols-2  lg:grid-cols-3">
      {noticias.map((noticia) => (
        <div
          key={noticia.id}
          className="block lg:max-w-[20rem] md:max-w-[20rem]  sm:max-w-[20rem] bg-transparent"
        >
          <div className="relative overflow-hidden bg-cover bg-no-repeat  h-64">
            <img
              className="w-full h-full object-cover"
              src={noticia.imagen}
              alt="imagen de noticia"
            />
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
  );
};

export default NoticiasCard;
