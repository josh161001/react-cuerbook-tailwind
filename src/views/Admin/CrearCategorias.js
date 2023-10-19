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
const CrearCategorias = () => {
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
                <img src={LogoItnl} className="h-8 mr-3" alt="ITNL Logo" />
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
      <div className="p-2 sm:ml-64">
        <div className=" rounded-lg mt-14 sm:mt-16">
          <div class="relative overflow-x-auto shadow-md rounded-lg sm:rounded-lg">
            <form className="bg-white dark:bg-gray-800 p-4">
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white"
              >
                Nombre de la categoria{" "}
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nombre del grupo..."
                />
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Registrar categoria
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearCategorias;
