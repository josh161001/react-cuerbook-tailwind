import { Route, Navigate, Routes } from "react-router-dom";
//views home
import PaginaPrincipal from "../views/Home/PaginaPrincipal";
import Eventos from "../views/Home/Eventos";
import Grupos from "../views/Home/Grupos";
import Noticias from "../views/Home/Noticias";

//views login
import IniciarSesion from "../views/login/IniciarSesion";
import RecuperarPassword from "../views/login/RecuperarPassword";

import EventosUser from "../views/User/Eventos";

//views admin
import DashboardAdmin from "../views/Admin/DashboardAdmin";
import UserAdmin from "../views/Admin/UserAdmin";
import CrearUser from "../views/Admin/CrearUser";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        //views home
        <Route path="/itnl/pagina-principal" element={<PaginaPrincipal />} />
        <Route path="/itnl/eventos" element={<Eventos />} />
        <Route path="/itnl/grupos" element={<Grupos />} />
        <Route path="/itnl/noticias" element={<Noticias />} />
        //views login
        <Route path="/itnl/iniciar-sesion" element={<IniciarSesion />} />
        <Route
          path="/itnl/recuperar-password"
          element={<RecuperarPassword />}
        />
        //views user
        <Route path="/eventos" element={<EventosUser />} />
        //views admin
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/user" element={<UserAdmin />} />
        <Route path="/admin/crear-usuario" element={<CrearUser />} />
        //redirect
        <Route
          path="/itnl/pagina-principal"
          element={<Navigate to="/itnl/pagina-principal" />}
        />
        <Route path="*" element={<Navigate to="/itnl/pagina-principal" />} />
      </Routes>
    </>
  );
};
