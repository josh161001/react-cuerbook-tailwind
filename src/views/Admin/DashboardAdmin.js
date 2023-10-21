import TableUser from "../../components/layout/TableUser";
import Cantidad from "../../components/layout/Cantidad";
import MenuHamburguesaAdmin from "../../components/layout/MenuHamburguesaAdmin";

const DashboardAdmin = () => {
  return (
    <>
      <MenuHamburguesaAdmin />
      <div className="sm:ml-64">
        <div className="p-4  rounded-lg  mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-4">
            <Cantidad />
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
