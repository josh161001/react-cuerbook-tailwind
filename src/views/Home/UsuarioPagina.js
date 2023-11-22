import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import urlAxios from "../../config/axios";
import tecnl from "../../assets/img/tecnologico.jpg";
import BotonFlotanteArriba from "../../components/common/BotonFlotanteArriba";
import Spinner from "../../components/layout/Spinner";

const UsuarioPagina = () => {
  const [usuario, guardarUsuario] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const consultarUsuario = async () => {
      const usuario = await urlAxios.get(`/users/${id}`);

      const filtrarGruposActivos = usuario.data.data.groups.filter(
        (grupo) => grupo.status === true
      );

      guardarUsuario({ ...usuario.data.data, groups: filtrarGruposActivos });
    };
    consultarUsuario();
  }, [id, usuario]);

  if (usuario === undefined || usuario.length === 0) {
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
      <section className="relative lg:py-48 py-20">
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
                <h3 className="text-3xl text-azul">{usuario.department}</h3>

                <div
                  className=" text-2xl mb-2 text-grayTec text-center p-2 pl-20 pr-20 mb-2"
                  dangerouslySetInnerHTML={{ __html: usuario.description }}
                ></div>
              </div>
              <div className="mt-10 py-6 border-t border-gray-300 ">
                <h2 className="pb-4 text-2xl mb-2 text-grayTec text-center mb-2">
                  Grupos
                </h2>{" "}
                <div className="flex grid lg:grid-cols-3 md:grid-cols-2 flex-col gap-4 p-2 sm:p-4 md:flex-row">
                  {/* inicia grupo */}
                  {usuario.groups &&
                    usuario.groups.map((grupo, index) => (
                      <Link key={index} to={`/tecnl/grupo/${grupo.id}`}>
                        <div className="relative grid h-[25rem]  w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                          <div
                            className="absolute bg-cover bg-center inset-0 m-0 h-full w-full overflow-hidden rounded-none"
                            style={{
                              backgroundImage: `url(${grupo.imagen})`,
                            }}
                          >
                            {" "}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsuarioPagina;
