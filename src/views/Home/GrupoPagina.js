import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import urlAxios from "../../config/axios";
import tecnl from "../../assets/img/tecnologico.jpg";
import moment from "moment";
import BotonFlotanteArriba from "../../components/common/BotonFlotanteArriba";
import Spinner from "../../components/layout/Spinner";

const GrupoPagina = () => {
  const { id } = useParams();

  const [grupo, guardarGrupo] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const consultarGrupo = async () => {
      const grupoConsulta = await urlAxios.get(`/groups/${id}`);

      const eventosActivos = grupoConsulta.data.data.events.filter(
        (evento) => evento.status === true
      );

      guardarGrupo({
        ...grupoConsulta.data.data,
        events: eventosActivos,
      });
    };
    consultarGrupo();
  }, [id, grupo]);

  const limpiarTrix = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    Array.from(doc.body.getElementsByTagName("strong")).forEach((strong) => {
      strong.outerHTML = strong.innerHTML;
    });
    return doc.body.innerHTML;
  };

  if (grupo === undefined || grupo.length === 0) {
    return <Spinner />;
  }

  return (
    <div>
      <BotonFlotanteArriba />

      <section className="relative block h-96">
        <div
          className="absolute top-0 w-full h-full bg-center "
          style={{
            backgroundImage: `url(${tecnl})`,
          }}
        >
          <div className="w-full h-full absolute opacity-50 bg-black" />
        </div>
      </section>
      <section className="relative lg:py-48 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-2  rounded">
              <div className="flex flex-wrap  justify-center">
                <div className="w-full  lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative pt-4">
                      <div
                        className="bg-center bg-cover rounded-full border border-gray-500  h-48 w-48"
                        style={{
                          backgroundImage: `url("${grupo.imagen}")`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl mb-2 text-azul mb-2">{grupo.name}</h3>
                <div className="mt-0 mb-2">
                  <p className="mr-2 mt-2 text-2xl text-center mb-2 text-grayTec">
                    {grupo.description}
                  </p>
                </div>
                <div className="flex justify-center items-center gap-4 "></div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 ">
                <h2 className="pb-4 text-2xl pt-2 text-center  text-azul ">
                  Eventos
                </h2>{" "}
                <div className="flex lg:grid lg:grid-cols-3 flex-col lg:gap-4 gap-4  sm:p-10 md:grid md:grid-cols-2 md:gap-6 flex-row">
                  {grupo.events &&
                    grupo.events.map((evento, index) => (
                      <div
                        key={index}
                        className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg"
                      >
                        <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
                        <img
                          src={evento.imagen}
                          className="object-cover bg-no-repeat bg-center w-full h-96 lg:h-80"
                          alt="Imagen del evento"
                        />

                        <div className="absolute inset-0 flex flex-col justify-end m-4">
                          <h6 className="text-azul uppercase font-bold mb-1">
                            {evento.Categories.name}
                          </h6>
                          <h2 className="text-white text-2xl font-bold mb-1">
                            {evento.name.length > 40
                              ? evento.name.slice(0, 40) + "..."
                              : evento.name}
                          </h2>
                          <Link to={`/tecnl/usuario-perfil/${evento.user.id}`}>
                            <p className="text-gray-400 hover:text-azul hover:font-semibold text-sm italic mb-1">
                              Por {evento.user.department}
                            </p>
                          </Link>

                          <p
                            className="text-white text-base mb-2"
                            dangerouslySetInnerHTML={{
                              __html:
                                evento.description.length > 90
                                  ? limpiarTrix(
                                      evento.description.slice(0, 90) + "..."
                                    )
                                  : limpiarTrix(evento.description),
                            }}
                          ></p>

                          <div className="flex justify-between pt-1">
                            <Link
                              to={`/tecnl/evento/${evento.id}`}
                              className="hover:bg-blue-700 px-4 rounded rounded-md bg-azul px-3.5 py-2.5 text-sm font-semibold text-white"
                            >
                              Ver más
                            </Link>
                            <p className="text-white pt-4 text-sm">
                              {moment(evento.createdAt).fromNow()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrupoPagina;
