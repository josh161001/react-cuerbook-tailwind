import logoNegro from "../../assets/img/Logo_ITNL.png";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const navegacion = [
  { name: "Pagina principal", to: "/itnl/pagina-principal" },
  { name: "Eventos", to: "/itnl/eventos" },
  { name: "Grupos", to: "/itnl/grupos" },
  { name: "Noticias", to: "/itnl/noticias" },
];
const HeaderPagina = () => {
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/itnl/pagina-principal" className="-m-1.5 p-1">
            <img className="h-9 pl-4 w-auto" alt="" src={logoNegro} />
          </NavLink>
          <Link
            to="/itnl/pagina-principal"
            className="pl-7 text-3xl font-bold text-stone-50 sm:text-3xl "
          >
            Cuerbook
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-50"
            onClick={() => setMenuHamburguesa(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navegacion.map((nav) => (
            <NavLink
              key={nav.name}
              to={nav.to}
              className={({ isActive }) =>
                `text-sm font-semibold  hover:text-red-500 ${
                  isActive ? "active" : ""
                } leading-6 text-stone-50`
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/itnl/iniciar-sesion"
            className="text-sm font-semibold pr-12 hover:text-red-500 leading-6 text-stone-50"
          >
            Iniciar Sesion
          </NavLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={menuHamburguesa}
        onClose={setMenuHamburguesa}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMenuHamburguesa(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navegacion.map((nav) => (
                  <NavLink
                    key={nav.name}
                    to={nav.to}
                    className={({ isActive }) =>
                      `-mx-3 block rounded-lg px-3 hover:text-red-500 py-2 text-base ${
                        isActive ? "active" : ""
                      } font-semibold leading-7 text-gray-900 hover:bg-gray-50`
                    }
                  >
                    {nav.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <NavLink
                  to="/itnl/iniciar-sesion"
                  className="-mx-3 block rounded-lg hover:text-red-500 px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Iniciar Sesión{" "}
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default HeaderPagina;
