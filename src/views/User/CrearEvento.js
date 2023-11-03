import { useState } from "react";
import LogoItnl from "../../assets/img/Logo_ITNL.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavUser from "../../components/layout//admin/NavUser";
import MenuEventosDrop from "../../components/layout/admin/MenuEventosDrop";
import MenuGruposDrop from "../../components/layout/admin/MenuGruposDrop";

const eventosDrop = [
  { name: "Ver Eventos", to: "/usuario/eventos" },
  { name: "Crear Eventos", to: "/usuario/crear-evento" },
];
const gruposDrop = [
  { name: "Ver Grupos", to: "/usuario/grupos" },
  { name: "Crear Grupo", to: "/usuario/crear-grupo" },
];

const CrearEventoUsuario = () => {
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

              <a className="flex pl-16 sm:pl-8 md:mr-24">
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
      <div className="p-2 sm:ml-64">
        <div className=" rounded-lg mt-14 sm:mt-14">
          <div class="relative overflow-x-auto shadow-md rounded-lg sm:rounded-lg">
            <form className="bg-white dark:bg-gray-800 p-4">
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white"
              >
                Nombre del evento{" "}
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nombre del evento..."
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

              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white"
              >
                Cupo del evento{" "}
              </label>
              <div class="relative">
                <input
                  type="number"
                  id="email-address-icon"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cupo de personas en el evento"
                />
              </div>
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white"
              >
                Selecciona la fecha del evento{" "}
              </label>
              <div class="relative  max-w-sm">
                <input
                  type="datetime-local"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white"
              >
                Lugar del evento{" "}
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="(Ejemplo: Auditorio, eficio 18, etc...)"
                />
              </div>
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium pt-4 text-gray-900 dark:text-white"
              >
                Descripcion del evento{" "}
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Descripcion del evento, de que tratara... "
                />
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Registrar Evento
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearEventoUsuario;
