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

const eventosDrop = [
  { name: "Ver Eventos", to: "/eventos" },
  { name: "Agregar Eventos", to: "/eventos/agregar" },
];
const gruposDrop = [
  { name: "Ver Grupos", to: "/grupos" },
  { name: "Crear Grupo", to: "/grupos/agregar" },
];
const usuariosDrop = [
  { name: "Ver Usuarios", to: "/admin/user" },
  { name: "Crear Usuario", to: "/admin/crear-usuario" },
];
const noticiasDrop = [
  { name: "Ver noticias", to: "/grupos" },
  { name: "Crear noticia", to: "/grupos/agregar" },
];

const categoriasDrop = [
  { name: "Ver categorias", to: "/grupos" },
  { name: "Crear categoria", to: "/grupos/agregar" },
];
const CrearUser = () => {
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
              <a
                href="https://flowbite.com"
                className="flex pl-16 sm:pl-8 md:mr-24"
              >
                <img src={LogoItnl} className="h-8 mr-3" alt="FlowBite Logo" />
                <span className="self-center text-xl pl-2 font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  CuerBook
                </span>
              </a>
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
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Cerrar Sesion
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>{" "}
      <div className="p-2 sm:ml-64">
        <div className=" rounded-lg mt-28 sm:mt-14">
          <div class="relative overflow-x-auto shadow-md rounded-lg sm:rounded-lg">
            <form className="dark:bg-gray-800 p-4">
              <label
                for="website-admin"
                class="block mb-2 text-sm pt-4 font-medium text-gray-900 dark:text-white"
              >
                Nombre de usuario
              </label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Departamento..."
                />
              </div>

              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white"
              >
                Email de usuario
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nombre@nuevoleon.tecnm.mx"
                />
              </div>

              <div class="mb-4">
                <label
                  for="password"
                  class="block mb-2 pt-4 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contrasena del usuario{" "}
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="**********"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="user_avatar"
              >
                Imagen de perfil
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
              <div
                class="mt-3 text-sm text-gray-500 pt-1 dark:text-gray-300"
                id="user_avatar_help"
              >
                Solo se permiten imagenes tipo jpg, png, jpeg, gif{" "}
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Registrar usuario
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearUser;
