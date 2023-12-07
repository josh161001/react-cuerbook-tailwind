import React from "react";
import { Link } from "react-router-dom";

const MenuFooter = () => {
  return (
    <ul className="list-none">
      <li className="mb-2">
        <Link
          to="/tecnl/pagina-principal"
          className="text-gray-300 hover:text-gray-500"
        >
          Página principal
        </Link>
      </li>
      <li className="mb-2">
        <Link to="/tecnl/eventos" className="text-gray-300 hover:text-gray-500">
          Eventos{" "}
        </Link>
      </li>
      <li className="mb-2">
        <Link to="/tecnl/grupos" className="text-gray-300 hover:text-gray-500">
          Grupos{" "}
        </Link>
      </li>
      <li className="mb-2">
        <Link
          to="/tecnl/noticias"
          className="text-gray-300 hover:text-gray-500"
        >
          Noticias{" "}
        </Link>
      </li>
    </ul>
  );
};

export default MenuFooter;
