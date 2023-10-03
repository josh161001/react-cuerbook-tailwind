import { Route, Navigate, Routes } from "react-router-dom";
//views home
import PaginaPrincipal from "../views/Home/PaginaPrincipal";
import Eventos from "../views/Home/Eventos";
import Grupos from "../views/Home/Grupos";
import Noticias from "../views/Home/Noticias";

//views login
import IniciarSesion from "../views/Login/IniciarSesion";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/pagina-principal" element={<PaginaPrincipal />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/" element={<Navigate to="/pagina-principal" />} />
      </Routes>
    </>
  );
};
