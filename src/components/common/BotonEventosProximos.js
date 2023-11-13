import { Link } from "react-router-dom";

const BotonEventosProximos = () => {
  return (
    <Link
      to="/itnl/eventos"
      className="text-sm font-semibold hover:text-azul leading-6 text-stone-50"
    >
      Eventos próximos <span aria-hidden="true">→</span>
    </Link>
  );
};

export default BotonEventosProximos;
