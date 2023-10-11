import React, { useContext } from "react";

import { Route, Navigate, Routes } from "react-router-dom";
//views home
import PaginaPrincipal from "../views/Home/PaginaPrincipal";
import Eventos from "../views/Home/Eventos";
import Grupos from "../views/Home/Grupos";
import Noticias from "../views/Home/Noticias";

//views login
import IniciarSesion from "../views/login/IniciarSesion";
import RecuperarPassword from "../views/login/RecuperarPassword";

//views admin
import DashboardAdmin from "../views/Admin/DashboardAdmin";
import UserAdmin from "../views/Admin/UserAdmin";
import CrearUser from "../views/Admin/CrearUser";
import EventosAdmin from "../views/Admin/EventosAdmin";
import CrearEventos from "../views/Admin/CrearEventos";
import GruposAdmin from "../views/Admin/GruposAdmin";
import CrearGrupo from "../views/Admin/CrearGrupo";
import NoticiasAdmin from "../views/Admin/NoticiasAdmin";
import CrearNoticias from "../views/Admin/CrearNoticias";
import CategoriasAdmin from "../views/Admin/CategoriasAdmin";
import CrearCategorias from "../views/Admin/CrearCategorias";
import { CuerbookContext, CuerbookProvider } from "../context/CuerbookContext";
//views user
import EventosUsuario from "../views/User/EventosUser";
import CrearEventoUsuario from "../views/User/CrearEvento";
import GruposUser from "../views/User/GruposUser";
import CrearGrupoUsuario from "../views/User/CrearGrupoUsuario";

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
            path="/itnl/recuperar-password"
            element={<RecuperarPassword />}
          />
          {/* //views user */}
          <Route path="/usuario/eventos" element={<EventosUsuario />} />
          <Route
            path="/usuario/crear-evento"
            element={<CrearEventoUsuario />}
          />
          {/* //views user/grupos */}
          <Route path="/usuario/grupos" element={<GruposUser />} />
          <Route path="/usuario/crear-grupo" element={<CrearGrupoUsuario />} />
          {/* //views admin */}
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          {/* //views admin/user */}
          <Route path="/admin/usuarios" element={<UserAdmin />} />
          <Route path="/admin/crear-usuario" element={<CrearUser />} />
          {/* //views admin/eventos */}
          <Route path="/admin/eventos" element={<EventosAdmin />} />
          <Route path="/admin/crear-evento" element={<CrearEventos />} />
          {/* //views admin/grupos */}
          <Route path="/admin/grupos" element={<GruposAdmin />} />
          <Route path="/admin/crear-grupo" element={<CrearGrupo />} />
          {/* //views admin/noticias */}
          <Route path="/admin/noticias" element={<NoticiasAdmin />} />
          <Route path="/admin/crear-noticia" element={<CrearNoticias />} />
          {/* //views admin/categorias */}
          <Route path="/admin/categorias" element={<CategoriasAdmin />} />
          <Route path="/admin/crear-categoria" element={<CrearCategorias />} />

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
