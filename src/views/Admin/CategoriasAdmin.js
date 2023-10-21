import TableCategorias from "../../components/layout/TableCategorias";

const CategoriasAdmin = () => {
  return (
    <>
      <div className="sm:ml-64">
        <div className="p-4  rounded-lg  mt-14">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableCategorias />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriasAdmin;
