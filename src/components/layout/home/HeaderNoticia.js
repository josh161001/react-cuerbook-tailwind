import { useState } from "react";
import logoNegro from "../../../assets/img/cuerbook_img.jpg";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

const HeaderNoticia = () => {
  const [menuNoticia, setMenuNoticia] = useState(false);

  const toggleMenuNoticia = () => {
    setMenuNoticia(!menuNoticia);
  };

  return (
    <nav className="bg-azul fixed w-full z-20 top-0 start-0 border-b border-azul">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/tecnl/pagina-principal" className="flex">
          <img className="h-10 w-auto rounded-full" alt="" src={logoNegro} />
          <span className="self-center pl-8 text-2xl font-semibold whitespace-nowrap dark:text-white">
            CuerBook
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3  rtl:space-x-reverse">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-50"
            onClick={toggleMenuNoticia}
          >
            <Bars3Icon
              className="h-6 w-6  md:hidden lg:hidden"
              aria-hidden="true"
            />
          </button>
        </div>
        <div
          className={`items-center ${
            menuNoticia ? "flex" : "hidden"
          } justify-between  w-full md:flex md:w-auto md:order-1`}
        >
          {console.log("menuNoticia: ", menuNoticia)}
          <ul className="flex flex-col p-4 md:p-0 mt-4 w-full bg-grayTec rounded-lg lg:bg-transparent lg:rounded-none lg:space-x-8 md:bg-transparent md:mt-0 md:space-x-8 md:flex-row lg:flex-row lg:mt-0 lg:border-0">
            <li>
              <Link
                to="/tecnl/pagina-principal"
                className="block py-2 px-3 text-white  rounded md:bg-transparent hover:bg-azul lg:hover:bg-grayTec md:hover:bg-grayTec lg:p-2 md:p-2 "
                aria-current="page"
              >
                Pagina principal
              </Link>
            </li>
            <li>
              <Link
                to="/tecnl/eventos"
                className="block py-2 px-3 text-white  rounded md:bg-transparent hover:bg-azul lg:hover:bg-grayTec md:hover:bg-grayTec lg:p-2 md:p-2 "
              >
                Eventos
              </Link>
            </li>
            <li>
              <Link
                to="/tecnl/grupos"
                className="block py-2 px-3 text-white  rounded md:bg-transparent hover:bg-azul lg:hover:bg-grayTec md:hover:bg-grayTec lg:p-2 md:p-2 "
              >
                Grupos
              </Link>
            </li>
            <li>
              <Link
                to="/tecnl/noticias"
                className="block py-2 px-3 text-white  rounded md:bg-transparent hover:bg-azul lg:hover:bg-grayTec md:hover:bg-grayTec lg:p-2 md:p-2"
              >
                Noticias
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNoticia;
