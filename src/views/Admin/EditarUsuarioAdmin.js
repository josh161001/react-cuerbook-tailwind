import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import urlAxios from "../../config/axios";

import tecnl from "../../assets/img/tecnologico.jpg";

import { Link } from "react-router-dom";

import ModalEditarUsuario from "../../components/layout/admin/ModalEditarUsuario";
import BotonFlotanteAdmin from "../../components/common/BotonFlotanteAdmin";

const EditarUsuarioAdmin = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [usuario, datoUsuario] = useState({
    email: "",
    name: "",
    description: "",
    department: "",
    imagen: null,
    status: true,
    roles: [],
  });

  const consultarUsuario = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      try {
        const usuarioConsulta = await urlAxios.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(usuarioConsulta.data.data);
        datoUsuario(usuarioConsulta.data.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/itnl/iniciar-sesion");
        }
      }
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  };

  useEffect(() => {
    consultarUsuario();
  }, [usuario]);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
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
      <section className="relative lg:py-44 py-52 py-20">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="rounded">
              <div className="flex flex-wrap  justify-center">
                <div className="w-full  lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative pt-4">
                      <div
                        className="bg-center bg-cover rounded-full border border-gray-500  h-48 w-48"
                        style={{
                          backgroundImage: `url("${usuario.imagen}")`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2">
                <h3 className="text-2xl text-azul lg:text-3xl ">
                  {usuario.department}
                </h3>

                <div className="mt-0 mb-2 text-gray-400">
                  <p className="mr-2 mt-2 text-gray-400"></p>
                  {usuario.email}
                </div>
                <div className="flex justify-center items-center gap-4 pt-2">
                  <div className="inline-block px-3 py-1 rounded-lg text-white bg-blue-500">
                    {usuario.roles}
                  </div>
                  <div>
                    <span
                      className={`inline-block px-2 py-1 rounded-lg text-white ${
                        usuario.status ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {usuario.status ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                </div>
                <div className="py-8 px-3  sm:mt-0">
                  <button
                    className="bg-azul active:bg-blue-600 uppercase text-white font-bold  text-xs px-4 py-2 rounded"
                    type="button"
                    onClick={abrirModal}
                  >
                    Editar perfil
                  </button>
                </div>
              </div>
              <div
                className="pb-4 text-2xl pt-4 mb-2 text-black text-center mb-2"
                dangerouslySetInnerHTML={{
                  __html: limpiarTrix(usuario.description),
                }}
              ></div>
              <div className="mt-10 py-6 border-t border-gray-300 ">
                <h2 className="pb-4 text-2xl mb-2 text-gray-700 text-center mb-2">
                  Grupos
                </h2>{" "}
                <div className="flex grid lg:grid-cols-3 md:grid-cols-2 flex-col gap-4 p-2 sm:p-4 md:flex-row">
                  {/* inicia grupo */}
                  {usuario.groups &&
                    usuario.groups.map((grupo, index) => (
                      <Link to={`/admin/grupo/${grupo.id}`}>
                        <div
                          key={index}
                          className="relative grid h-[25rem]  w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
                        >
                          <div
                            className="absolute bg-cover bg-center inset-0 m-0 h-full w-full overflow-hidden rounded-none"
                            style={{
                              backgroundImage: `url(${grupo.imagen})`,
                            }}
                          >
                            <div className="absolute inset-0 w-full h-full to-bg-black-30 bg-gradient-to-t from-black/70 via-black/80"></div>
                          </div>
                          <div className="relative p-10 px-6 py-14 md:px-10">
                            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white ">
                              {grupo.name}
                            </h2>

                            <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                              {grupo.user.department}
                            </h5>
                            <img
                              alt="Perfil de usuario"
                              src={grupo.user.imagen}
                              className="relative inline-block  w-20 rounded-full border-2 border-gray-600 object-cover object-center"
                            />
                          </div>
                        </div>
                      </Link>
                    ))}

                  {modalAbierto && (
                    <ModalEditarUsuario
                      isOpen={modalAbierto}
                      onClose={cerrarModal}
                    />
                  )}
                  {/* finaliza grupo */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditarUsuarioAdmin;
