import { useEffect, useState } from "react";
import urlAxios from "../../../config/axios";
import { Link } from "react-router-dom";

const GruposPopulares = () => {
  const [grupos, datoGrupo] = useState([]);
  const consultarGrupos = async () => {
    const gruposConsulta = await urlAxios.get(`/groups/populares`);

    const filtroGruposActivos = gruposConsulta.data.data.filter(
      (grupo) => grupo.status === true
    );

    // console.log(filtroGruposActivos);
    datoGrupo(filtroGruposActivos);
  };
  useEffect(() => {
    consultarGrupos();
  }, [grupos]);

  if (!grupos.length)
    return (
      <h2 className="text-center text-3xl pb-4">No hay grupos que mostrar</h2>
    );

  return (
    <>
      {grupos.map((grupo, index) => (
        <Link key={index} to={`/tecnl/grupo/${grupo.id}`}>
          <div className="relative grid h-[25rem] w-full gap-4 flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              className="absolute inset-0 m-0 h-full w-full bg-cover overflow-hidden rounded-none"
              style={{
                backgroundImage: `url(${grupo.imagen})`,
                backgroundPosition: "center",
              }}
            >
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
    </>
  );
};

export default GruposPopulares;
