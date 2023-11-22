import MenuHamburguesaAdmin from "../../components/layout/admin/MenuHamburguesaAdmin";
import TableEventos from "../../components/layout/admin/TableEventos";

const EventosAdmin = () => {
  return (
    <>
      <MenuHamburguesaAdmin />
      <div className="sm:ml-64">
        <div className="p-3 rounded-lg mt-12 sm:mt-14">
          <div className="flex  items-center mb-4">
            <h2 className="text-2xl p-9  text-gray-900 dark:text-gray-900">
              Cuerbook | Eventos
            </h2>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableEventos />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventosAdmin;
