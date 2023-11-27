import { useParams, Link } from "react-router-dom";
import urlAxios from "../../config/axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Footer from "../../components/layout/home/Footer";
import BotonFlotanteArriba from "../../components/common/BotonFlotanteArriba";
import HeaderNoticia from "../../components/layout/home/HeaderNoticia";
import Spinner from "../../components/layout/Spinner";
import CardNoticiasAsc from "../../components/layout/home/CardNoticiasAsc";
const NoticiaPagina = () => {
  const { id } = useParams();

  const [noticia, guardarNoticia] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const consultarNoticia = async () => {
      try {
        const respuesta = await urlAxios.get(`/notice/${id}`);
        const noticiaConsulta = respuesta.data.data;

        guardarNoticia(noticiaConsulta);
      } catch (error) {
        console.error("Error al consultar la noticia:", error);
      }
    };

    consultarNoticia();
  }, [id]);

  if (!noticia) {
    return <Spinner />;
  }

  const { user, imagen, createdAt, description, name } = noticia;

  return (
    <>
      <HeaderNoticia />
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4   pt-20 p-2 m-2">
        <div className="lg:col-span-6 border-r  lg:p-4">
          <div className="p-4 border-b pb-4">
            <h2 className="text-3xl font-bold pb-2">{name}</h2>
            <div className="flex items-center space-x-4">
              {user && (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.imagen}
                  alt="imagen de usuario"
                />
              )}
              <div className="font-medium text-black">
                <div>
                  Por:
                  <Link to={`/tecnl/usuario-perfil/${user.id}`}>
                    {user && (
                      <span className="italic hover:text-azul hover:font-semibold">
                        {" "}
                        {user.department}
                      </span>
                    )}
                  </Link>
                </div>
                <div className="text-sm text-gray-500 ">
                  <span>
                    {" "}
                    Fecha de publicación: {moment(createdAt).format("LL")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Información */}
            <div className="pt-4">
              <img className="w-full h-full" src={imagen} alt="Noticia" />
            </div>
            <div
              className="pt-6 pb-4  descripcion"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        </div>
        <div className="lg:col-span-4  lg:p-8">
          <div className="grid gap-4">
            <h2 className="text-2xl  font-semibold border-b  pb-4">
              Noticias de tu interés
            </h2>
            <CardNoticiasAsc noticiaSeleccionadaId={id} />
          </div>
        </div>
      </div>
      <BotonFlotanteArriba />
      <Footer />
    </>
  );
};

export default NoticiaPagina;
