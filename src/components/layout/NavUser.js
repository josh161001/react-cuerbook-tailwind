import { useState } from "react";

const NavUser = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center pr-5 ml-3">
        <div>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://scontent.fntr5-1.fna.fbcdn.net/v/t39.30808-6/374559773_1468198440690997_1648860052519703067_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeH9u7WATzRAqVUylM2wS1QmGHLOZHooqjgYcs5keiiqOBMGrGoeTpQHvQ7smat3X2-gf3FJyVib7pz-Rkxmmy6D&_nc_ohc=NRRIja9viycAX_XY9xJ&_nc_ht=scontent.fntr5-1.fna&oh=00_AfDKFfIGa8xeDLDCl5okq6Z3y4FBXy9pf6VReOiH5R1wbA&oe=6529252A"
              alt="user photo"
            />
          </button>
        </div>
        <div
          className={`absolute z-50 ${
            isDropdownOpen ? "block" : "hidden"
          } mt-60 mr-.5 right-0 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
          id="dropdown-user"
        >
          <div className="px-4 py-3" role="none">
            <p
              className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
              role="none"
            >
              l19480829@nuevoleon.tecnm.mx{" "}
            </p>
          </div>
          <ul className="py-1" role="none">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Perfil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Configuracion de cuenta
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Actualizar contraseña
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Cerrar sesion{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavUser;
