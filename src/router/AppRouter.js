import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

//views home
import PaginaPrincipal from "../views/Home/PaginaPrincipal";
import Eventos from "../views/Home/Eventos";
import Grupos from "../views/Home/Grupos";
import Noticias from "../views/Home/Noticias";

//views login
import IniciarSesion from "../views/login/IniciarSesion";
import EnviarInstrucciones from "../views/login/EnviarInstrucciones";

//views admin
import DashboardAdmin from "../views/Admin/DashboardAdmin";
import UserAdmin from "../views/Admin/UserAdmin";
import EventosAdmin from "../views/Admin/EventosAdmin";
import GruposAdmin from "../views/Admin/GruposAdmin";
import NoticiasAdmin from "../views/Admin/NoticiasAdmin";
import CategoriasAdmin from "../views/Admin/CategoriasAdmin";
import { CuerbookContext, CuerbookProvider } from "../context/CuerbookContext";
//views user
import EventosUsuario from "../views/User/EventosUser";
import CrearEventoUsuario from "../views/User/CrearEvento";
import GruposUser from "../views/User/GruposUser";
import ActualizarPassword from "../views/login/ActualizarPassword";

export const AppRouter = () => {
  const [auth, guardarAuth] = useContext(CuerbookContext);

  return (
    <>
      {" "}
      <CuerbookProvider value={[auth, guardarAuth]}>
        <Routes>
          {/* {        //views home */}
          <Route path="/itnl/pagina-principal" element={<PaginaPrincipal />} />
          <Route path="/itnl/eventos" element={<Eventos />} />
          <Route path="/itnl/grupos" element={<Grupos />} />
          <Route path="/itnl/noticias" element={<Noticias />} />

          {/* //views login */}
          <Route path="/itnl/iniciar-sesion" element={<IniciarSesion />} />
          <Route
            path="/itnl/enviar-instrucciones"
            element={<EnviarInstrucciones />}
          />

          <Route
            path="/itnl/recuperar-password/:token"
            element={<ActualizarPassword />}
          />
          {/* //views user */}
          <Route path="/usuario/eventos" element={<EventosUsuario />} />
          <Route
            path="/usuario/crear-evento"
            element={<CrearEventoUsuario />}
          />
          {/* //views user/grupos */}
          <Route path="/usuario/grupos" element={<GruposUser />} />
          {/* //views admin */}
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          {/* //views admin/user */}
          <Route path="/admin/usuarios" element={<UserAdmin />} />
          {/* //views admin/eventos */}
          <Route path="/admin/eventos" element={<EventosAdmin />} />
          {/* //views admin/grupos */}
          <Route path="/admin/grupos" element={<GruposAdmin />} />
          {/* //views admin/noticias */}
          <Route path="/admin/noticias" element={<NoticiasAdmin />} />
          {/* //views admin/categorias */}
          <Route path="/admin/categorias" element={<CategoriasAdmin />} />

          {/* //redirect */}
          <Route
            path="/itnl/pagina-principal"
            element={<Navigate to="/itnl/pagina-principal" />}
          />

          <Route path="*" element={<Navigate to="/itnl/pagina-principal" />} />
        </Routes>
      </CuerbookProvider>
    </>
  );
};
