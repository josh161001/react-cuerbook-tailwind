import React from "react";

const MenuFooter = () => {
  return (
    <ul className="list-none">
      <li className="mb-2">
        <a href="/enlace-1" className="text-gray-300 hover:text-gray-500">
          Pagina principal
        </a>
      </li>
      <li className="mb-2">
        <a href="/enlace-2" className="text-gray-300 hover:text-gray-500">
          Eventos{" "}
        </a>
      </li>
      <li className="mb-2">
        <a href="/enlace-3" className="text-gray-300 hover:text-gray-500">
          Grupos{" "}
        </a>
      </li>
      <li className="mb-2">
        <a href="/enlace-3" className="text-gray-300 hover:text-gray-500">
          Noticias{" "}
        </a>
      </li>
    </ul>
  );
};

export default MenuFooter;
