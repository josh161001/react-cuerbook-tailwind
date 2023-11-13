import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CuerbookContext } from "../../../context/CuerbookContext";
import urlAxios from "../../../config/axios";

const ModalEditarNoticia = ({ isOpen, onClose }) => {
  const { id } = useParams();

  const [auth, guardarAuth] = useContext(CuerbookContext);
  const [tokenCargando, setTokenCargando] = useState(false);

  const [notice, datoNotice] = useState({
    name: "",
    description: "",
    status: true,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      guardarAuth({
        access_token: token,
        auth: true,
      });
      setTokenCargando(true);
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  }, [navigate, guardarAuth]);

  const consultarNoticiaEditar = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      const noticiaConsultaEditar = await urlAxios.get(`/notice/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      datoNotice(noticiaConsultaEditar.data.data);
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  };

  useEffect(() => {
    consultarNoticiaEditar();
  }, [notice]);
};

export default ModalEditarNoticia;
