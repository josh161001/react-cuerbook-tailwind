import React, { useState } from "react";
import LogoItnl from "../../../assets/img/Logo_ITNL.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavUser from "../../../components/layout/admin/NavUser";
import CerrarSesion from "../../../components/layout/CerrarSesion";
import MenuGruposUsuariosDrop from "./MenuGruposUsuariosDrop";
import MenuEventosUsuariosDrop from "./MenuEventosUsuariosDrop";
import NavUserUsuarios from "./NavUserUsuarios";

const MenuHamburguesaUsuarios = () => {
  const eventosDrop = [{ name: "Ver Eventos", to: "/usuario/eventos" }];
  const gruposDrop = [{ name: "Ver Grupos", to: "/usuario/grupos" }];

  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const toggleMenuHamburguesa = () => {
    setMenuHamburguesa(!menuHamburguesa);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full  border-b border-gray-200 bg-gray-800 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                type="button"
                className="-m-2.5 pl-4 inline-flex sm:hidden items-center justify-center rounded-md p-2.5 text-stone-50"
                aria-expanded={menuHamburguesa}
                onClick={toggleMenuHamburguesa}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex pl-4 sm:pl-8 md:mr-24">
                <img src={LogoItnl} className="h-8 mr-3" alt="TECNL LOGO" />
                <span className="self-center text-1xl pt-2  font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Cuerbook | Usuario
                </span>
              </div>
            </div>

            <NavUserUsuarios />
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
            <li></li>
            <MenuGruposUsuariosDrop name="Grupos" options={gruposDrop} />
            <MenuEventosUsuariosDrop name="Eventos" options={eventosDrop} />
            <CerrarSesion />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default MenuHamburguesaUsuarios;
