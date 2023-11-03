import { useEffect, useState } from "react";
import urlAxios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { ca } from "date-fns/locale";
import { set } from "date-fns";

const Cantidad = () => {
  const navigate = useNavigate();

  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [totalGrupos, setGruposTotal] = useState(0);
  const [totalEventos, setTotalEventos] = useState(0);
  const [totalCategorias, setTotalCategorias] = useState(0);
  const [totalNotices, setTotalNotices] = useState(0);

  const totalNotice = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      try {
        const notices = await urlAxios.get("/notice/total", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTotalNotices(notices.data.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/itnl/iniciar-sesion");
        }
      }
    }
  };
  const totalUsuario = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      try {
        const usuarios = await urlAxios.get("/users/total", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTotalUsuarios(usuarios.data.usuariosTotal);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/itnl/iniciar-sesion");
        }
      }
    }
  };

  const totalGrupo = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      try {
        const grupos = await urlAxios.get("/groups/total", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGruposTotal(grupos.data.totalGrupos);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/itnl/iniciar-sesion");
        }
      }
    }
  };
  const totalEvento = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      try {
        const eventos = await urlAxios.get("/events/total", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTotalEventos(eventos.data.totalEventos);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/itnl/iniciar-sesion");
        }
      }
    }
  };
  const totalCategoria = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      try {
        const categorias = await urlAxios.get("/categories/total", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTotalCategorias(categorias.data.totalCategorias);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/itnl/iniciar-sesion");
        }
      }
    }
  };

  useEffect(() => {
    totalUsuario();
    totalGrupo();
    totalEvento();
    totalCategoria();
    totalNotice();
  }, [totalUsuarios, totalGrupos, totalCategorias, totalEventos, totalNotices]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 uppercase dark:text-gray-500">
          Usuarios
        </p>
        <p className="text-gray-400 text- p-2">{totalUsuarios}</p>
      </div>
      <div className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 dark:text-gray-500">Grupos</p>
        <p className="text-gray-400 p-2">{totalGrupos}</p>
      </div>
      <div className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 dark:text-gray-500">Eventos</p>
        <p className="text-gray-400 p-2">{totalEventos}</p>
      </div>
      <div className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 dark:text-gray-500">Noticias</p>
        <p className="text-gray-400 p-2">{totalNotices}</p>
      </div>
      <div className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 dark:text-gray-500">Categorias</p>
        <p className="text-gray-400 p-2">{totalCategorias}</p>
      </div>
    </>
  );
};

export default Cantidad;
