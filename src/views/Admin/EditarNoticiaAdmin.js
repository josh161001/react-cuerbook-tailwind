import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import urlAxios from "../../config/axios";
import { Link } from "react-router-dom";
import moment from "moment";

const EditarNoticiaAdmin = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [notice, datoNotice] = useState({
    name: "",
    description: "",
    imagen: null,
    status: true,
  });

  const consultarNoticia = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      try {
        const noticiaConsulta = await urlAxios.get(`/notice/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(noticiaConsulta.data.data);
        datoNotice(noticiaConsulta.data.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/itnl/iniciar-sesion");
        }
      }
    }
  };
  useEffect(() => {
    consultarNoticia();
  }, [notice]);

  return (
    <div className="grid grid-cols-1  gap-4 ">
      <div className="lg:col-span-2 lg:p-10  p-4 m-4">
        {/* Columna para mostrar información detallada de una noticia */}
        <div className="p-4 border-b pb-4">
          {/* Contenido de la noticia detallada */}
          <h2 className="text-3xl  font-bold pb-2">{notice.name}</h2>

          <div className="flex items-center space-x-4">
            {notice && notice.user && (
              <img
                className="w-10 h-10 rounded-full"
                src={notice.user.imagen}
                alt="imagen de usuario"
              />
            )}

            <div className="font-medium dark:text-black ">
              <div>
                Por:
                {notice && notice.user && (
                  <span className="italic"> {notice.user.name}</span>
                )}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>
                  {" "}
                  Fecha de publicacion: {moment(notice.createdAt).format("LL")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* informacion */}

          <div className="pt-4">
            <img src={notice.imagen} />
          </div>
          <div
            className="pt-6 pb-8 descripcion"
            dangerouslySetInnerHTML={{ __html: notice.description }}
          ></div>
        </div>
        <div className="relative bg-gray-200  p-4 flex w-full flex-col rounded-xl  bg-clip-border text-gray-700 shadow-none">
          <h3>Sobre el autor</h3>
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            {notice && notice.user && (
              <img
                src={notice.user.imagen}
                alt="tania andrew"
                className="relative inline-block h-[40px] w-[40px] !rounded-full object-cover object-center"
              />
            )}

            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {notice && notice.user && (
                    <Link to={`/admin/usuario/${notice.user.id}`}>
                      {notice.user.name}
                    </Link>
                  )}
                </h5>
              </div>
              {notice && notice.user && (
                <p className="block font-sans text-base antialiased  font-light leading-relaxed text-blue-gray-900">
                  {notice.user.email}
                </p>
              )}
            </div>
          </div>
          <div className="p-0 mb-6">
            {notice && notice.user && (
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                "{notice.user.description}"
              </p>
            )}
          </div>
        </div>
      </div>
      {/* <div className=" w-full lg:col-span-1 p-2  ">
        <h2 className="text-2xl font-semibold text-center pb-4">
          Noticias de tu interes
        </h2>

        {/* Columna para mostrar noticias adicionales en tarjetas */}
      {/* <div className="grid gap-4">
          <div className="bg-white rounded-lg shadow ">
            <div className=" rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Título de la noticia
                </div>
                <p className="text-gray-700 text-base">
                  Descripción de la noticia.
                </p>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600 text-sm">Por Autor</p>
                <p className="text-gray-600 text-sm">
                  Fecha de publicación: 01/01/2023
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Leer más
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className=" rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Título de la noticia
                </div>
                <p className="text-gray-700 text-base">
                  Descripción de la noticia.
                </p>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600 text-sm">Por Autor</p>
                <p className="text-gray-600 text-sm">
                  Fecha de publicación: 01/01/2023
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Leer más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}{" "}
    </div>
  );
};

export default EditarNoticiaAdmin;
