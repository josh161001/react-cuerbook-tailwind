import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

//views home
import PaginaPrincipal from "../views/Home/PaginaPrincipal";
import Eventos from "../views/Home/Eventos";
import Grupos from "../views/Home/Grupos";
import Noticias from "../views/Home/Noticias";
import EventoPaginaHome from "../views/Home/EventoPaginaHome";
import GrupoPagina from "../views/Home/GrupoPagina";
import NoticiaPagina from "../views/Home/NoticiaPagina";
import UsuarioPagina from "../views/Home/UsuarioPagina";

//views Login
import IniciarSesion from "../views/Login/IniciarSesion";
import EnviarInstrucciones from "../views/Login/EnviarInstrucciones";
import ActualizarPassword from "../views/Login/ActualizarPassword";
import { CuerbookContext, CuerbookProvider } from "../context/CuerbookContext";

//views admin
import DashboardAdmin from "../views/Admin/DashboardAdmin";
import UserAdmin from "../views/Admin/UserAdmin";
import EventosAdmin from "../views/Admin/EventosAdmin";
import GruposAdmin from "../views/Admin/GruposAdmin";
import NoticiasAdmin from "../views/Admin/NoticiasAdmin";
import CategoriasAdmin from "../views/Admin/CategoriasAdmin";
import EditarUsuarioAdmin from "../views/Admin/EditarUsuarioAdmin";
import EditarGrupoAdmin from "../views/Admin/EditarGrupoAdmin";
import ActualizarPasswordAdmin from "../views/Admin/ActualizarPasswordAdmin";
import EditarNoticiaAdmin from "../views/Admin/EditarNoticiaAdmin";
import EditarEventoAdmin from "../views/Admin/EditarEventoAdmin";
import UsuarioPerfilAdmin from "../views/Admin/UsuarioPerfilAdmin";

//views user
import GruposUsuario from "../views/User/GruposUsuario";
import GrupoPaginaUsuario from "../views/User/GrupoPaginaUsuario";
import EventosUsuario from "../views/User/EventosUsuario";
import EventoPaginaUsuario from "../views/User/EventoPaginaUsuario";
import ActualizarPasswordUsuario from "../views/User/ActualizarPasswordUsuario";
import UsuarioPerfilUsuarios from "../views/User/UsuarioPerfilUsuarios";

export const AppRouter = () => {
  const [auth, guardarAuth] = useContext(CuerbookContext);

  return (
    <>
      {" "}
      <CuerbookProvider value={[auth, guardarAuth]}>
        <Routes>
          {/* {        //views home */}
          <Route path="/tecnl/pagina-principal" element={<PaginaPrincipal />} />
          <Route path="/tecnl/eventos" element={<Eventos />} />
          {/* view intl eventos */}
          <Route path="/tecnl/evento/:id" element={<EventoPaginaHome />} />
          <Route path="/tecnl/grupos" element={<Grupos />} />
          <Route path="/tecnl/grupo/:id" element={<GrupoPagina />} />
          <Route path="/tecnl/noticias" element={<Noticias />} />
          <Route path="/tecnl/noticia/:id" element={<NoticiaPagina />} />
          {/* views itnl usuarios */}
          <Route path="/tecnl/usuario-perfil/:id" element={<UsuarioPagina />} />

          {/* //views Login */}
          <Route path="/tecnl/iniciar-sesion" element={<IniciarSesion />} />
          <Route
            path="/tecnl/enviar-instrucciones"
            element={<EnviarInstrucciones />}
          />
          <Route
            path="/tecnl/recuperar-password/:token"
            element={<ActualizarPassword />}
          />

          {/* //views user */}

          <Route path="/usuario/grupos" element={<GruposUsuario />} />
          <Route path="/usuario/grupo/:id" element={<GrupoPaginaUsuario />} />
          <Route path="/usuario/eventos" element={<EventosUsuario />} />
          <Route path="/usuario/evento/:id" element={<EventoPaginaUsuario />} />
          <Route
            path="/usuario/actualizar-password/:id"
            element={<ActualizarPasswordUsuario />}
          />
          <Route
            path="/usuario/configuracion-cuenta/:id"
            element={<UsuarioPerfilUsuarios />}
          />

          {/* //views admin */}
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route
            path="/admin/configuracion-cuenta/:id"
            element={<UsuarioPerfilAdmin />}
          />

          {/* //views admin/user */}
          <Route path="/admin/usuarios" element={<UserAdmin />} />
          <Route path="/admin/usuario/:id" element={<EditarUsuarioAdmin />} />
          <Route
            path="/admin/actualizar-password/:id"
            element={<ActualizarPasswordAdmin />}
          />

          {/* //views admin/eventos */}
          <Route path="/admin/eventos" element={<EventosAdmin />} />
          <Route path="/admin/evento/:id" element={<EditarEventoAdmin />} />
          {/* //views admin/grupos */}
          <Route path="/admin/grupos" element={<GruposAdmin />} />
          <Route path="/admin/grupo/:id" element={<EditarGrupoAdmin />} />

          {/* //views admin/noticias */}
          <Route path="/admin/noticias" element={<NoticiasAdmin />} />
          <Route path="/admin/noticia/:id" element={<EditarNoticiaAdmin />} />
          {/* //views admin/categorias */}
          <Route path="/admin/categorias" element={<CategoriasAdmin />} />

          {/* //redirect */}
          <Route
            path="/tecnl/pagina-principal"
            element={<Navigate to="/tecnl/pagina-principal" />}
          />

          <Route path="*" element={<Navigate to="/tecnl/pagina-principal" />} />
        </Routes>
      </CuerbookProvider>
    </>
  );
};
