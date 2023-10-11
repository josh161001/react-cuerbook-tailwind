import { useState } from "react";
import LogoItnl from "../../assets/img/Logo_ITNL.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavUser from "../../components/layout/NavUser";
import MenuEventosDrop from "../../components/layout/MenuEventosDrop";
import MenuGruposDrop from "../../components/layout/MenuGruposDrop";
import TableGruposUsuario from "../../components/layout/TableGruposUsuario";

const eventosDrop = [
  { name: "Ver Eventos", to: "/usuario/eventos" },
  { name: "Agregar Eventos", to: "/usuario/crear-evento" },
];
const gruposDrop = [
  { name: "Ver Grupos", to: "/usuario/grupos" },
  { name: "Crear Grupo", to: "/usuario/crear-grupo" },
];

const GruposUser = () => {
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
            <MenuEventosDrop name="Eventos" options={eventosDrop} />
            <MenuGruposDrop name="Grupos" options={gruposDrop} />
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
      <div className="sm:ml-64">
        <div className="p-4  rounded-lg  mt-14">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableGruposUsuario />
          </div>
        </div>
      </div>
    </>
  );
};

export default GruposUser;