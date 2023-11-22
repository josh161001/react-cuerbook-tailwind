import { useState } from "react";
import ModalCrearGrupo from "../../components/layout/admin/ModalCrearGrupo";
import MenuHamburguesaUsuarios from "../../components/layout/user/MenuHamburguesaUsuarios";
import TableGruposUsuarios from "../../components/layout/user/TableGruposUsuarios";
import ModalCrearGrupoUsuarios from "../../components/layout/user/ModalCrearGrupoUsuarios";

const GruposUsuario = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <>
      <MenuHamburguesaUsuarios />
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
            <TableGruposUsuarios />
          </div>
        </div>
        {modalAbierto && (
          <ModalCrearGrupoUsuarios
            isOpen={modalAbierto}
            onClose={cerrarModal}
          />
        )}
      </div>
    </>
  );
};

export default GruposUsuario;
