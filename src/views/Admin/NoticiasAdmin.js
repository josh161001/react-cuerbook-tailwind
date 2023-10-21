import TableNoticias from "../../components/layout/TableNoticias";
import MenuHamburguesaAdmin from "../../components/layout/MenuHamburguesaAdmin";

const NoticiasAdmin = () => {
  return (
    <>
      <MenuHamburguesaAdmin />
      <div className="sm:ml-64">
        <div className="p-4  rounded-lg  mt-14">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableNoticias />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticiasAdmin;
