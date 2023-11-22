import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import urlAxios from "../../config/axios";
import moment from "moment";
import ModalEditarNoticia from "../../components/layout/admin/ModalEditarNoticia";
import BotonFlotanteAdmin from "../../components/common/BotonFlotanteAdmin";
const EditarNoticiaAdmin = () => {
  const [modalAbiertoNoticia, setModalAbiertoNoticia] = useState(false);

  const abrirModalNoticia = () => {
    setModalAbiertoNoticia(true);
  };
  const cerrarModalNoticia = () => {
    setModalAbiertoNoticia(false);
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const [notice, datoNotice] = useState({
    name: "",
    description: "",
    imagen: null,
    status: true,
  });

  useEffect(() => {
    const consultarNoticia = async () => {
      const token = localStorage.getItem("access_token");

      if (token) {
        try {
          const noticiaConsulta = await urlAxios.get(`/notice/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          datoNotice(noticiaConsulta.data.data);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            navigate("/itnl/iniciar-sesion");
          }
        }
      } else {
        navigate("/itnl/iniciar-sesion");
      }
    };
    consultarNoticia();
  }, [navigate, id]);

  return (
    <div className="grid  gap-4 p-2 m-2">
      <BotonFlotanteAdmin />
      <div className=" lg:p-4">
        <div className="p-4 border-b pb-4">
          <h2 className="text-3xl font-bold pb-2">{notice.name}</h2>
          <div className="flex items-center space-x-4">
            {notice && notice.user && (
              <img
                className="w-10 h-10 rounded-full"
                src={notice.user.imagen}
                alt="imagen de usuario"
              />
            )}
            <div className="font-medium dark:text-black">
              <div>
                Por:
                {notice && notice.user && (
                  <span className="italic"> {notice.user.department}</span>
                )}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>
                  {" "}
                  Fecha de publicación: {moment(notice.createdAt).format("LL")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-azul mt-4 active:bg-blue-700 hover:bg-blue-700 uppercase text-white font-bold  text-xs px-4 py-2 rounded"
          type="button"
          onClick={abrirModalNoticia}
        >
          Editar Noticia
        </button>
        <div>
          {/* Información */}
          <div className="pt-4 ">
            <img src={notice.imagen} alt="Noticia" />
          </div>
          <div
            className="pt-6 pb-4  descripcion"
            dangerouslySetInnerHTML={{ __html: notice.description }}
          ></div>
        </div>
      </div>

      {modalAbiertoNoticia && (
        <ModalEditarNoticia
          isOpen={modalAbiertoNoticia}
          onClose={cerrarModalNoticia}
        />
      )}
    </div>
  );
};

export default EditarNoticiaAdmin;
