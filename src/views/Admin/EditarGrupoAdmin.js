import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import urlAxios from "../../config/axios";

import tecnl from "../../assets/img/tecnologico.jpg";

import ModalEditarGrupo from "../../components/layout/admin/ModalEditarGrupo";
import ModalCrearEvento from "../../components/layout/admin/ModalCrearEvento";
import BotonFlotanteAdmin from "../../components/common/BotonFlotanteAdmin";

import moment from "moment";

const EditarGrupoAdmin = () => {
  const [modalAbiertoGrupo, setModalAbiertoGrupo] = useState(false);

  const [modalAbiertoEvento, setModalAbiertoGrupoEvento] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const [grupo, datoGrupo] = useState({
    name: "",
    imagen: null,
    description: "",
    status: true,
  });

  useEffect(() => {
    const consultarGrupo = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const grupoConsulta = await urlAxios.get(`/groups/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // console.log(grupoConsulta.data.data);
          datoGrupo(grupoConsulta.data.data);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            navigate("/itnl/iniciar-sesion");
          }
        }
      } else {
        navigate("/itnl/iniciar-sesion");
      }
    };
    consultarGrupo();
  }, [grupo, navigate, id]);

  const abrirModal = () => {
    setModalAbiertoGrupo(true);
  };
  const cerrarModal = () => {
    setModalAbiertoGrupo(false);
  };

  const abrirModalEvento = () => {
    setModalAbiertoGrupoEvento(true);
  };
  const cerrarModalEvento = () => {
    setModalAbiertoGrupoEvento(false);
  };

  const limpiarTrix = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    Array.from(doc.body.getElementsByTagName("strong")).forEach((strong) => {
      strong.outerHTML = strong.innerHTML;
    });
    return doc.body.innerHTML;
  };

  return (
    <div>
      <BotonFlotanteAdmin />
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
      <section className="relative lg:py-52 py-52 py-20">
        <div className="container mx-auto  ">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="  rounded">
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
              <div className="text-center ">
                <h3 className="text-3xl mb-2 text-gray-700 mb-2">
                  {grupo.name}
                </h3>

                <div className="flex justify-center items-center gap-4 ">
                  <div>
                    <span
                      className={`inline-block px-2 py-1 rounded-lg text-white ${
                        grupo.status ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {grupo.status ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                </div>
                <div className="py-6 px-3 flex justify-center items-center gap-2  sm:mt-0">
                  <button
                    className="bg-blue-700 active:bg-blue-900 hover:bg-blue-900 uppercase text-white font-bold  text-xs px-4 py-2 rounded"
                    type="button"
                    onClick={abrirModal}
                  >
                    Editar Grupo
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-800 active:bg-red-900 uppercase text-white font-bold  text-xs px-4 py-2 rounded"
                    type="button"
                    onClick={abrirModalEvento}
                  >
                    Agregar Evento{" "}
                  </button>
                </div>
                <div className="mt-0 mb-2 text-gray-400  ">
                  <p className="mr-2 mt-2 text-2xl text-center mb-2 text-gray-400 ">
                    {grupo.description}
                  </p>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 ">
                <h2 className="pb-4 text-2xl pt-2 text-center mb-2 text-gray-700 mb-2">
                  Eventos
                </h2>{" "}
                <div className="flex lg:grid lg:grid-cols-3 flex-col lg:gap-4 gap-4 p-4 sm:p-10 md:grid md:grid-cols-2 md:gap-6 sm:flex-row">
                  {grupo.events &&
                    grupo.events.map((evento) => (
                      // console.log(evento),
                      <div
                        key={evento.id}
                        className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg"
                      >
                        <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
                        <img
                          src={evento.imagen}
                          className="object-cover bg-no-repeat w-full h-96 lg:h-80"
                        />

                        <div className="absolute inset-0 flex flex-col justify-end m-4">
                          <h6 className="text-azul uppercase font-bold mb-1">
                            {evento.Categories.name}
                          </h6>
                          <h2 className="text-white text-2xl font-bold mb-1">
                            {evento.name}
                          </h2>
                          <Link
                            to={`/admin/usuario/${evento.user.id}`}
                            className="text-gray-400 hover:text-azul hover:font-semibold text-sm italic mb-1"
                          >
                            Por {evento.user.department}
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
                              to={`/admin/evento/${evento.id}`}
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
      {modalAbiertoGrupo && (
        <ModalEditarGrupo isOpen={modalAbiertoGrupo} onClose={cerrarModal} />
      )}

      {modalAbiertoEvento && (
        <ModalCrearEvento
          isOpen={modalAbiertoEvento}
          onClose={cerrarModalEvento}
        />
      )}
    </div>
  );
};

export default EditarGrupoAdmin;
