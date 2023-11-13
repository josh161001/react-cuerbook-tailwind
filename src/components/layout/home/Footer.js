import MenuFooter from "./MenuFooter";

const Footer = () => {
  return (
    <footer className="footer px-10 py-4 border-t bg-azul text-black-300">
      <div className="px-0 pt-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-2 text-sm">
            <p className="text-white font-bold tracking-wide">Dirección</p>
            <div style={{ maxWidth: "100%", height: "400px" }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.2196968166586!2d-100.24579992460285!3d25.66401097741335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c038d1481d33%3A0xb3b13be0b9c7c6f2!2sInstituto%20Tecnol%C3%B3gico%20de%20Nuevo%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1698910990594!5m2!1ses-419!2smx"
                style={{ width: "100%", height: "100%", border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <span className="text-white font-bold tracking-wide">
              Redes sociales y sitio de interes
            </span>
            <section>
              <div className="flex items-center mt-1 text-2xl space-x-3">
                <a
                  href="https://itnleon.mindbox.app/login/alumno"
                  className="text-violet-700 text-center transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  mindbox
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-20 text-center h-10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </section>
            <p className="mt-4 text-white text-sm">
              Si tienes alguna duda o sugerencia, puedes contactarnos a través
              de nuestras redes sociales y tambien puedes visitar otros sitios
              de interes
            </p>
            <p className="mt-4 text-2xl text-white pb-4 ">Menu </p>
            <MenuFooter />
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white">
            © Copyright {new Date().getFullYear()} Intituto Tecnologico de Nuevo
            Leon, todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
