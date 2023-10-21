import MenuHamburguesaAdmin from "../../components/layout/MenuHamburguesaAdmin";
import TableUser from "../../components/layout/TableUser";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CuerbookContext } from "../../context/CuerbookContext";
import { useNavigate } from "react-router-dom";
import urlAxios from "../../config/axios";
import Spinner from "../../components/layout/Spinner";
import ModalCrearUsuario from "../../components/layout/ModalCrearUsuario";

const UserAdmin = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  return (
    <>
      <MenuHamburguesaAdmin />

      <div className="sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          <div className="flex  items-center mb-4">
            <h2 className="text-2xl p-4  text-gray-900 dark:text-gray-900">
              Cuerbook | Usuarios
            </h2>
            <button
              onClick={openCreateModal}
              className="bg-blue-500 text-white px-4 py-3 hover:bg-blue-600"
            >
              Agregar Usuario
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableUser />
          </div>
        </div>
        {isCreateModalOpen && (
          <ModalCrearUsuario
            isOpen={isCreateModalOpen}
            onClose={closeCreateModal}
          />
        )}
      </div>
    </>
  );
};

export default UserAdmin;
