import { useEffect, useState } from "react";
import CabeceraPagina from "../../components/layout/home/CabeceraPagina";
import Footer from "../../components/layout/home/Footer";
import HeaderPagina from "../../components/layout/home/HeaderPagina";
import urlAxios from "../../config/axios";
import { Link } from "react-router-dom";

const Grupos = () => {
  const [grupos, datoGrupo] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const consultarGrupos = async () => {
    const gruposConsulta = await urlAxios.get(`/groups`);
    console.log(gruposConsulta.data.data);
    datoGrupo(gruposConsulta.data.data);
  };
  useEffect(() => {
    consultarGrupos();
  }, []);
  return (
    <>
      <div className="bg-black">
        <HeaderPagina />
        <CabeceraPagina />
      </div>

      <div className="w-full h-full">
        <h2 className="lg:text-3xl md:text-3xl  text-2xl font-bold text-center pt-4 italic">
          <span className="bg-azul pl-2 pt-2 pb-2 pr-2">
            Explora los grupos y sus eventos
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-10">
          {/* inicia grupos */}
          {grupos.map((grupo) => (
            <Link to={`/admin/grupo/${grupo.id}`}>
              <div className="relative grid h-[25rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div
                  key={grupo.id}
                  className="absolute inset-0 m-0 h-full w-full bg-cover overflow-hidden rounded-none"
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
                  {grupo && grupo.user && (
                    <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                      {grupo.user.name}
                    </h5>
                  )}

                  {grupo && grupo.user && (
                    <img
                      alt="Perfil de usuario"
                      src={grupo.user.imagen}
                      className="relative inline-block  w-20 rounded-full border-2 border-gray-600 object-cover object-center"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}

          {/* finaliza grupo */}
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Grupos;
