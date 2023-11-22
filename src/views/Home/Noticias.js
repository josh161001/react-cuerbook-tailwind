import { useEffect, useState } from "react";
import CabeceraPagina from "../../components/layout/home/CabeceraPagina";
import Footer from "../../components/layout/home/Footer";

import HeaderPagina from "../../components/layout/home/HeaderPagina";
import urlAxios from "../../config/axios";
import { Link } from "react-router-dom";
import BotonFlotanteArriba from "../../components/common/BotonFlotanteArriba";

const Noticias = () => {
  const [noticias, guardarNoticias] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const limpiarTrix = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    Array.from(doc.body.getElementsByTagName("strong")).forEach((strong) => {
      strong.outerHTML = strong.innerHTML;
    });
    return doc.body.innerHTML;
  };

  useEffect(() => {
    const consultarNoticias = async () => {
      try {
        const noticiasConsulta = await urlAxios.get("/notice");
        const filtroNoticiasActivos = noticiasConsulta.data.data.filter(
          (noticia) => noticia.status === true
        );
        guardarNoticias(filtroNoticiasActivos);
      } catch (error) {
        console.error("Error al consultar noticias:", error);
      }
    };
    consultarNoticias();
  }, []);

  const noticiasFiltradas = noticias.filter((noticia) =>
    noticia.name.toLowerCase().includes(filtroNombre.toLowerCase())
  );

  return (
    <>
      <div className="bg-black">
        <HeaderPagina />
        <CabeceraPagina />
      </div>
      <BotonFlotanteArriba />

      <div className="m-2 p-2">
        <h2 className="text-center mb-4">
          <span className="text-2xl font-semibold text-center text-dark">
            Lo que ocurre en TECNL
          </span>
        </h2>
        <div className="flex flex-col justify-center sm:flex-row">
          <div className="pb-4">
            <input
              className="p-2 w-full rounded border focus:ring-azul border-grayTec "
              type="text"
              placeholder="Buscar por noticia..."
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-4 lg:pl-12 md:pl-6 grid-cols-1 w-full md:grid-cols-2   lg:grid-cols-3">
          {noticiasFiltradas.map((noticia, index) => (
            <div
              key={index}
              className="block lg:max-w-[20rem] md:max-w-[20rem]  sm:max-w-[20rem] bg-transparent"
            >
              <Link to={`/tecnl/noticia/${noticia.id}`}>
                <div className="relative overflow-hidden bg-cover bg-no-repeat  h-64">
                  <img
                    className="w-full h-full object-cover"
                    src={noticia.imagen}
                    alt="imagen de noticia"
                  />
                </div>
              </Link>

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
      </div>

      <Footer />
    </>
  );
};
export default Noticias;
