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
              Redes sociales y sitios de interés
            </span>
            <section>
              <div className="grid pt-4 grid-cols-2 gap-4 lg:grid-cols-4 align-center text-center">
                <a
                  href="https://www.facebook.com/institutotecnologicodenuevoleon/?locale=es_LA"
                  className="text-indigo-700 font-semibold text-center transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="38"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#3f51b5"
                      d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"
                    ></path>
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/school/itnl---instituto-tecnol%C3%B3gico-de-nuevo-le%C3%B3n/?originalSubdomain=mx"
                  className="text-blue-600 font-semibold text-center transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="38"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0288d1"
                      d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
                    ></path>
                  </svg>
                  Linkedln
                </a>
                <a
                  href="https://itnleon.mindbox.app/login/alumno"
                  className="text-violet-700 font-semibold text-center transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-20 text-center h-10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
                      clipRule="evenodd"
                    />
                  </svg>
                  mindbox
                </a>
                <a
                  href="https://campus.itnuevoleon.com/"
                  className="text-amber-500 font-semibold text-center transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="38"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ffab40"
                      d="M33.5,16c-2.5,0-4.8,1-6.5,2.6C25.3,17,23,16,20.5,16c-5.2,0-9.5,4.3-9.5,9.5V37h6V24.5 c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5V37h6V24.5c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5V37h6V25.5C43,20.3,38.7,16,33.5,16z"
                    ></path>
                    <path d="M5.5 16.2H6.5V32H5.5z"></path>
                    <path
                      fill="#424242"
                      d="M22,13c1.1,0.4,2.6,2,3,3c-1.8,1.7-2.6,2.9-3,6c-0.1,1.1-0.9,1.7-2,1c-3.1-1.9-6-2-8-2 c-1-1-0.5-3.7,0-5l6,1L22,13z"
                    ></path>
                    <path fill="#616161" d="M18,17H4l11-7h14L18,17z"></path>
                    <path
                      fill="#424242"
                      d="M7.5,30c0-2.2-0.7-4-1.5-4s-1.5,1.8-1.5,4s0.7,4,1.5,4S7.5,32.2,7.5,30z"
                    ></path>
                  </svg>
                  Moddle
                </a>

                <a
                  href="http://www.itnl.edu.mx/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white font-semibold text-center transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <img
                    className="rounded-full w-10 h-10 "
                    src="https://bdelrio.tecnm.mx/conocenos/identidad/icon_tecnm.jpg"
                  />
                  TecNM | Campus Nuevo León
                </a>
              </div>
            </section>
            <p className="mt-4 text-white text-sm">
              Si tienes alguna duda o sugerencia, puedes contactarnos a través
              de nuestras redes sociales y también visitar otros sitios de
              intereses dentro de la institución.
            </p>
            <p className="mt-4 text-2xl text-white pb-4 ">Menú </p>
            <MenuFooter />
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white">
            © Copyright {new Date().getFullYear()} Intituto Tecnológico de Nuevo
            León, todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
