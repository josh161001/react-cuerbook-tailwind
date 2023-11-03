import { useEffect } from "react";
import CabeceraPagina from "../../components/layout/home/CabeceraPagina";
import Footer from "../../components/layout/home/Footer";

import HeaderPagina from "../../components/layout/home/HeaderPagina";

const Noticias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black">
      <HeaderPagina />
      <CabeceraPagina />

      <Footer />
    </div>
  );
};
export default Noticias;
