import { useState } from "react";
import MenuHamburguesaAdmin from "../../components/layout/admin/MenuHamburguesaAdmin";
import ModalCrearGrupo from "../../components/layout/admin/ModalCrearGrupo";
import TableGrupos from "../../components/layout/admin/TableGrupos";

const GruposAdmin = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <>
      <MenuHamburguesaAdmin />
      <div className="sm:ml-64">
        <div className="p-3 rounded-lg mt-12 sm:mt-12">
          <div className="flex  items-center ">
            <h2 className="text-2xl p-9  text-gray-900 dark:text-gray-900">
              Cuerbook | Grupos
            </h2>
            <button
              onClick={abrirModal}
              className="bg-blue-500 text-white px-4 py-3 hover:bg-blue-600"
            >
              Agregar Grupo
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableGrupos />
          </div>
        </div>
        {modalAbierto && (
          <ModalCrearGrupo isOpen={modalAbierto} onClose={cerrarModal} />
        )}
      </div>
    </>
  );
};

export default GruposAdmin;
