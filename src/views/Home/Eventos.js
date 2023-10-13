import { useState } from "react";
import CabeceraPagina from "../../components/layout/CabeceraPagina";
import HeaderPagina from "../../components/layout/HeaderPagina";

const Eventos = () => {
  const [categoriaAbierto, setCategoriaAbierto] = useState(false);

  const toggleCategorias = () => {
    setCategoriaAbierto(!categoriaAbierto);
  };

  return (
    <>
      <div className="bg-black">
        <HeaderPagina />
        <CabeceraPagina />
      </div>
      <div className="w-full h-full">
        <h2 className="text-3xl text-center p-2 font-bold  text-black-50 sm:text-4xl">
          Eventos Proximos
        </h2>
        <form>
          <div class="flex p-2 pr-2 pl-2 sm:p-2 sm:pr-20 sm:pl-20 ">
            <label
              for="search-dropdown"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
              aria-expanded={categoriaAbierto}
              onClick={toggleCategorias}
            >
              Categorias
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`${
                categoriaAbierto ? "block" : "hidden"
              } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mockups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logos
                  </button>
                </li>
              </ul>
            </div>
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Busca el nombre del evento"
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Buscar</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex sm:grid grid-cols-3 flex-col gap-4 p-4 sm:p-10  md:flex-row">
        {/* inicia evento */}
        <div className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
          <img
            src="https://picsum.photos/seed/1840/1000/600"
            className="object-cover w-full h-full"
            alt="Card Image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-1">
              Título del evento
            </h2>
            <p className="text-gray-400 text-sm mb-2">by Nombre del Autor</p>
            <p className="text-white text-base mb-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="flex justify-between pt-2">
              <a
                href="#"
                className="hover:bg-red-500 px-4 rounded rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white"
              >
                Ver más
              </a>
              <p className="text-white pt-4 text-sm">hace 7 horas</p>
            </div>
          </div>
        </div>
        {/* finaliza evento */}
        {/* inicia evento */}
        <div className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
          <img
            src="https://picsum.photos/seed/1840/1000/600"
            className="object-cover w-full h-full"
            alt="Card Image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-1">
              Título del evento
            </h2>
            <p className="text-gray-400 text-sm mb-2">By Nombre del Autor</p>
            <p className="text-white text-base mb-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="flex justify-between pt-2">
              <a
                href="#"
                className="hover:bg-red-500 px-4 rounded rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white"
              >
                Ver más
              </a>
              <p className="text-white pt-4 text-sm">hace 7 horas</p>
            </div>
          </div>
        </div>
        {/* finaliza evento */}
        {/* inicia evento */}
        <div className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
          <img
            src="https://picsum.photos/seed/1840/1000/600"
            className="object-cover w-full h-full"
            alt="Card Image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-1">
              Título del evento
            </h2>
            <p className="text-gray-400 text-sm mb-2">By Nombre del Autor</p>
            <p className="text-white text-base mb-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="flex justify-between pt-2">
              <a
                href="#"
                className="hover:bg-red-500 px-4 rounded rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white"
              >
                Ver más
              </a>
              <p className="text-white pt-4 text-sm">hace 7 horas</p>
            </div>
          </div>
        </div>
        {/* inicia evento */}
        <div className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
          <img
            src="https://picsum.photos/seed/1840/1000/600"
            className="object-cover w-full h-full"
            alt="Card Image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-1">
              Título del evento
            </h2>
            <p className="text-gray-400 text-sm mb-2">by Nombre del Autor</p>
            <p className="text-white text-base mb-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="flex justify-between pt-2">
              <a
                href="#"
                className="hover:bg-red-500 px-4 rounded rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white"
              >
                Ver más
              </a>
              <p className="text-white pt-4 text-sm">hace 7 horas</p>
            </div>
          </div>
        </div>
        {/* finaliza evento */}
        {/* inicia evento */}
        <div className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
          <img
            src="https://picsum.photos/seed/1840/1000/600"
            className="object-cover w-full h-full"
            alt="Card Image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-1">
              Título del evento
            </h2>
            <p className="text-gray-400 text-sm mb-2">By Nombre del Autor</p>
            <p className="text-white text-base mb-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="flex justify-between pt-2">
              <a
                href="#"
                className="hover:bg-red-500 px-4 rounded rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white"
              >
                Ver más
              </a>
              <p className="text-white pt-4 text-sm">hace 7 horas</p>
            </div>
          </div>
        </div>
        {/* finaliza evento */}
        {/* inicia evento */}
        <div className="max-w-md mx-auto relative rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-stone-950 to-black absolute inset-0 rounded-lg opacity-60"></div>
          <img
            src="https://picsum.photos/seed/1840/1000/600"
            className="object-cover w-full h-full"
            alt="Card Image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-1">
              Título del evento
            </h2>
            <p className="text-gray-400 text-sm mb-2">By Nombre del Autor</p>
            <p className="text-white text-base mb-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="flex justify-between pt-2">
              <a
                href="#"
                className="hover:bg-red-500 px-4 rounded rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white"
              >
                Ver más
              </a>
              <p className="text-white pt-4 text-sm">hace 7 horas</p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-200">
        <div className="container mx-auto py-5">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-4 mb-4">
              <div className="bg-white mb-4 rounded-lg">
                <div className="text-center p-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                  />
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="flex justify-center mb-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-1">
                      Follow
                    </button>
                    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
                      Message
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg">
                <h2>Informacion del evento</h2>
                <p>
                  Direccion: <span>Edifico 22</span>
                </p>
                <p>
                  Cupo: <span>30</span> personas
                </p>
                <p>
                  Direccion: <span>Edifico 22</span>
                </p>
                <p>
                  Direccion: <span>Edifico 22</span>
                </p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg mb-4">
                <div className="p-4">
                  <div className="flex mb-4">
                    <div className="w-1/4">
                      <span className="font-bold">Full Name</span>
                    </div>
                    <div className="w-3/4">
                      <span className="text-muted">Johnatan Smith</span>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="flex mb-4">
                    <div className="w-1/4">
                      <span className="font-bold">Email</span>
                    </div>
                    <div className="w-3/4">
                      <span className="text-muted">example@example.com</span>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="flex mb-4">
                    <div className="w-1/4">
                      <span className="font-bold">Phone</span>
                    </div>
                    <div className="w-3/4">
                      <span className="text-muted">(097) 234-5678</span>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="flex mb-4">
                    <div className="w-1/4">
                      <span className="font-bold">Mobile</span>
                    </div>
                    <div className="w-3/4">
                      <span className="text-muted">(098) 765-4321</span>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="flex">
                    <div className="w-1/4">
                      <span className="font-bold">Address</span>
                    </div>
                    <div className="w-3/4">
                      <span className="text-muted">
                        Bay Area, San Francisco, CA
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2">
                  <div className="bg-white rounded-lg mb-4">
                    <div className="p-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                      <div className="mt-2">
                        <span className="font-semibold">Web Design</span>
                        <div className="rounded bg-blue-300 h-2 mt-1"></div>
                      </div>
                      <div className="mt-2">
                        <span className="font-semibold">Website Markup</span>
                        <div className="rounded bg-blue-300 h-2 mt-1"></div>
                      </div>
                      <div className="mt-2">
                        <span className="font-semibold">One Page</span>
                        <div className="rounded bg-blue-300 h-2 mt-1"></div>
                      </div>
                      <div className="mt-2">
                        <span className="font-semibold">Mobile Template</span>
                        <div className="rounded bg-blue-300 h-2 mt-1"></div>
                      </div>
                      <div className="mt-2">
                        <span className="font-semibold">Backend API</span>
                        <div className="rounded bg-blue-300 h-2 mt-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Eventos;
