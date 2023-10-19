import { useState } from "react";
import LogoItnl from "../../assets/img/Logo_ITNL.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavUser from "../../components/layout/NavUser";
import MenuEventosDrop from "../../components/layout/MenuEventosDrop";
import MenuGruposDrop from "../../components/layout/MenuGruposDrop";
import MenuUsuariosDrop from "../../components/layout/MenuUsuariosDrop";
import MenuNoticasDrop from "../../components/layout/MenuNoticasDrop";
import MenuCategoriasDrop from "../../components/layout/MenuCategoriasDrop";

import { NavLink } from "react-router-dom";
import CerrarSesion from "../../components/layout/CerrarSesion";
import CardGrupos from "../../components/layout/CardGrupos";

const usuariosDrop = [
  { name: "Ver Usuarios", to: "/admin/usuarios" },
  { name: "Crear Usuario", to: "/admin/crear-usuario" },
];
const eventosDrop = [{ name: "Ver Eventos", to: "/admin/eventos" }];
const gruposDrop = [
  { name: "Ver Grupos", to: "/admin/grupos" },
  { name: "Crear Grupo", to: "/admin/crear-grupo" },
];

const noticiasDrop = [
  { name: "Ver noticias", to: "/admin/noticias" },
  { name: "Crear noticia", to: "/admin/crear-noticia" },
];

const categoriasDrop = [
  { name: "Ver categorias", to: "/admin/categorias" },
  { name: "Crear categoria", to: "/admin/crear-categoria" },
];
const GruposAdmin = () => {
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const toggleMenuHamburguesa = () => {
    setMenuHamburguesa(!menuHamburguesa);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-dark border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                type="button"
                className="-m-2.5 pl-6 inline-flex sm:hidden items-center justify-center rounded-md p-2.5 text-stone-50"
                aria-expanded={menuHamburguesa}
                onClick={toggleMenuHamburguesa}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex pl-16 sm:pl-8 md:mr-24">
                <img src={LogoItnl} className="h-8 mr-3" alt="FlowBite Logo" />
                <span className="self-center text-xl pl-2 font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  CuerBook
                </span>
              </div>
            </div>

            <NavUser />
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed ${
          menuHamburguesa
            ? "translate-x-0 ease-out"
            : "-translate-x-full ease-in"
        } top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center p-2 ${
                    isActive ? "bg-gray-700" : ""
                  } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Dashboard{" "}
                </span>
              </NavLink>
            </li>
            <MenuUsuariosDrop name="Usuarios" options={usuariosDrop} />
            <MenuEventosDrop name="Eventos" options={eventosDrop} />
            <MenuGruposDrop name="Grupos" options={gruposDrop} />
            <MenuNoticasDrop name="Noticias" options={noticiasDrop} />
            <MenuCategoriasDrop name="Categorias" options={categoriasDrop} />
            <CerrarSesion />
          </ul>
        </div>
      </aside>{" "}
      <div className="sm:ml-64">
        <div className="p-4  rounded-lg  mt-14">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <CardGrupos />
          </div>
        </div>
      </div>
    </>
  );
};

export default GruposAdmin;
