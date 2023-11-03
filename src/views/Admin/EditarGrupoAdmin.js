import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import urlAxios from "../../config/axios";

import cuervoItnl from "../../assets/img/cuervo-ITNL.jpg";

import ModalEditarGrupo from "../../components/layout/admin/ModalEditarGrupo";
import ModalCrearEvento from "../../components/layout/admin/ModalCrearEvento";

import moment from "moment";
const EditarGrupoAdmin = () => {
  const [modalAbiertoGrupo, setModalAbiertoGrupo] = useState(false);

  const [modalAbiertoEvento, setModalAbiertoGrupoEvento] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const [grupo, datoGrupo] = useState({
    name: "",
    imagen: "",
    description: "",
    status: true,
  });

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
    }
  };

  useEffect(() => {
    consultarGrupo();
  }, [grupo]);

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

  return (
    <div>
      <section className="relative block h-96">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${cuervoItnl})`,
          }}
        >
          <div className="w-full h-full absolute opacity-50 bg-black" />
        </div>
      </section>
      <section className="relative py-12 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6  rounded">
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
              <div className="text-center mt-2">
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
                <h3 className="text-3xl mb-2 text-gray-700 mb-2">
                  {grupo.name}
                </h3>

                <div className="flex justify-center items-center gap-4 pt-4">
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
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 ">
                <div className="mt-0 mb-2 text-gray-400  ">
                  <p className="mr-2 mt-2 text-2xl text-center mb-2 text-gray-400 ">
                    {grupo.description}
                  </p>
                </div>
                <h2 className="pb-4 text-2xl pt-2 text-center mb-2 text-gray-700 mb-2">
                  Eventos
                </h2>{" "}
                <div className="flex lg:grid lg:grid-cols-3 flex-col lg:gap-0 gap-2 p-4 sm:p-10 md:grid md:grid-cols-2 md:gap-6 sm:flex-row">
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
                          className="object-cover bg-no-repeat w-full h-94 lg:h-80"
                        />

                        <div className="absolute inset-0 flex flex-col justify-end m-4">
                          <h6 className="text-red-700 uppercase font-bold mb-1">
                            {evento.Categories.name}
                          </h6>
                          <h2 className="text-white text-2xl font-bold mb-1">
                            {evento.name}
                          </h2>
                          <p className="text-gray-400 text-sm italic mb-1">
                            Por {evento.user.name}
                          </p>
                          <p
                            className="text-white text-base mb-2"
                            dangerouslySetInnerHTML={{
                              __html:
                                evento.description.length > 90
                                  ? evento.description.slice(0, 90) + "..."
                                  : evento.description,
                            }}
                          ></p>

                          <div className="flex justify-between pt-1">
                            <a
                              href="#"
                              className="hover:bg-red-500 px-4 rounded rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white"
                            >
                              Ver más
                            </a>
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
