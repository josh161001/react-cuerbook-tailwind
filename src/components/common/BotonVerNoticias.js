import { Link } from "react-router-dom";

const BotonVerNoticias = () => {
  return (
    <Link
      to="/itnl/noticias"
      className="hover:bg-red-500 px-4 rounded rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white"
    >
      Ver más
    </Link>
  );
};

export default BotonVerNoticias;
