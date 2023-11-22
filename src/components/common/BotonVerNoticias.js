import { Link } from "react-router-dom";

const BotonVerNoticias = () => {
  return (
    <Link
      to="/tecnl/noticias"
      className="hover:bg-blue-700 px-4 rounded rounded-md bg-azul px-3.5 py-2.5 text-sm font-semibold text-white"
    >
      Ver noticias
    </Link>
  );
};

export default BotonVerNoticias;
