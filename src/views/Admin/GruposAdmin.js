import CardGrupos from "../../components/layout/CardGrupos";
import MenuHamburguesaAdmin from "../../components/layout/MenuHamburguesaAdmin";

const GruposAdmin = () => {
  return (
    <>
      <MenuHamburguesaAdmin />
      <div className="sm:ml-64">
        <div className="p-4  rounded-lg  mt-14">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <CardGrupos />
          </div>
        </div>
      </div>
    </>
  );
};

export default GruposAdmin;
