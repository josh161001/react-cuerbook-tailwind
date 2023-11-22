import { Link } from "react-router-dom";

const BotonEventosProximos = () => {
  return (
    <Link
      to="/tecnl/eventos"
      className="text-sm font-semibold hover:text-azul leading-6 text-stone-50"
    >
      Eventos próximos <span>→</span>
    </Link>
  );
};

export default BotonEventosProximos;
