import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BotonFlotanteUsuarios = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario se desplaza hacia abajo
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Desplazarse suavemente hasta el inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="fixed bottom-16 right-4 z-10">
          <button className="bg-azul hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
      <div className=" fixed bottom-4 right-4 z-20">
        <Link to="/usuario/grupos">
          <button className="bg-azul hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BotonFlotanteUsuarios;
