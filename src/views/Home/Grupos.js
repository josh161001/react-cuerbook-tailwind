import { useEffect, useState } from "react";
import CabeceraPagina from "../../components/layout/home/CabeceraPagina";
import Footer from "../../components/layout/home/Footer";
import HeaderPagina from "../../components/layout/home/HeaderPagina";
import urlAxios from "../../config/axios";
import { Link } from "react-router-dom";
import BotonFlotanteArriba from "../../components/common/BotonFlotanteArriba";

const Grupos = () => {
  const [grupos, datoGrupo] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const consultarGrupos = async () => {
    const gruposConsulta = await urlAxios.get(`/groups`);

    const filtroGruposActivos = gruposConsulta.data.data.filter(
      (grupo) => grupo.status === true
    );

    datoGrupo(filtroGruposActivos);
  };
  useEffect(() => {
    consultarGrupos();
  }, []);

  const gruposFiltrados = grupos.filter((grupo) =>
    grupo.name.toLowerCase().includes(filtroNombre.toLowerCase())
  );

  return (
    <>
      <div className="bg-black">
        <HeaderPagina />
        <CabeceraPagina />
      </div>
      <BotonFlotanteArriba />

      <div className="w-full h-full">
        <h2 className="text-center pt-4 mb-4">
          <span className="text-2xl font-semibold text-center text-dark">
            Los grupos de TECNL
          </span>
        </h2>
        <div className="flex flex-col justify-center sm:flex-row">
          <div className="p-2 pb-4">
            <input
              className="p-2 w-full rounded border focus:ring-azul border-grayTec "
              type="text"
              placeholder="Buscar por grupo..."
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-10">
          {/* inicia grupos */}
          {gruposFiltrados.map((grupo, index) => (
            <Link key={index} to={`/tecnl/grupo/${grupo.id}`}>
              <div className="relative grid h-[25rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div
                  className="absolute bg-center inset-0 m-0 h-full w-full bg-cover overflow-hidden rounded-none"
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
                      {grupo.user.department}
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
