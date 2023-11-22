import { useState } from "react";
import MenuHamburguesaAdmin from "../../components/layout/admin/MenuHamburguesaAdmin";
import TableNoticias from "../../components/layout/admin/TableNoticias";
import ModalCrearNoticia from "../../components/layout/admin/ModalCrearNoticia";

const UserAdmin = () => {
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
        <div className="p-4 rounded-lg mt-12 sm:mt-12">
          <div className="flex  items-center mb-4">
            <h2 className="text-2xl p-9  text-gray-900 dark:text-gray-900">
              Cuerbook | Noticias
            </h2>
            <button
              onClick={abrirModal}
              className="bg-blue-500 text-white px-4 py-3 hover:bg-blue-600"
            >
              Agregar Noticia
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableNoticias />
          </div>
        </div>
        {modalAbierto && (
          <ModalCrearNoticia isOpen={modalAbierto} onClose={cerrarModal} />
        )}
      </div>
    </>
  );
};

export default UserAdmin;
