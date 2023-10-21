import TableEventos from "../../components/layout/TableEventos";
import MenuHamburguesaAdmin from "../../components/layout/MenuHamburguesaAdmin";

const EventosAdmin = () => {
  return (
    <>
      <MenuHamburguesaAdmin />
      <div className="sm:ml-64">
        <div className="p-4  rounded-lg  mt-14">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableEventos />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventosAdmin;
