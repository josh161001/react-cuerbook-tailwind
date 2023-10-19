import CabeceraPagina from "../../components/layout/CabeceraPagina";
import HeaderPagina from "../../components/layout/HeaderPagina";

const Grupos = () => {
  return (
    <>
      <div className="bg-black">
        <HeaderPagina />
        <CabeceraPagina />
      </div>

      <div className="w-full h-full">
        <h2 className="text-3xl text-center p-2 font-bold  text-black-50 sm:text-4xl">
          Explora los grupos y sus eventos
        </h2>
        <div className="flex sm:grid grid-cols-3 flex-col gap-4 p-4 sm:p-10  md:flex-row">
          {/* inicia grupo */}
          <div className="max-w-sm border rounded-lg shadow dark:bg-black">
            <img
              className="rounded-t-lg w-full"
              src="https://previews.123rf.com/images/rawpixel/rawpixel1602/rawpixel160204909/51892582-grupo-de-personas-concepto-reuni%C3%B3n-informal-social.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-start mt-2 sm:mt-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mt-1 mr-2 bg-white rounded-full"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                  <p className="text-gray-900 dark:text-white">
                    Jorge Martinez
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-4 sm:mt-0 text-center  items-center px-3 py-2 text-sm font-medium sm:text-center text-white bg-blue-700 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-blue-800
              w-full sm:w-auto"
                >
                  Explorar →
                </a>
              </div>
            </div>
          </div>
          {/* finaliza grupo */}
          {/* inicia grupo */}
          <div className="max-w-sm border rounded-lg shadow dark:bg-black">
            <img
              className="rounded-t-lg w-full"
              src="https://previews.123rf.com/images/rawpixel/rawpixel1602/rawpixel160204909/51892582-grupo-de-personas-concepto-reuni%C3%B3n-informal-social.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-start mt-2 sm:mt-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mt-1 mr-2 bg-white rounded-full"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                  <p className="text-gray-900 dark:text-white">
                    Jorge Martinez
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-4 sm:mt-0 text-center  items-center px-3 py-2 text-sm font-medium sm:text-center text-white bg-blue-700 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-blue-800
              w-full sm:w-auto"
                >
                  Explorar →
                </a>
              </div>
            </div>
          </div>
          {/* finaliza grupo */}
          {/* inicia grupo */}
          <div className="max-w-sm border rounded-lg shadow dark:bg-black">
            <img
              className="rounded-t-lg w-full"
              src="https://previews.123rf.com/images/rawpixel/rawpixel1602/rawpixel160204909/51892582-grupo-de-personas-concepto-reuni%C3%B3n-informal-social.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-start mt-2 sm:mt-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mt-1 mr-2 bg-white rounded-full"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                  <p className="text-gray-900 dark:text-white">
                    Jorge Martinez
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-4 sm:mt-0 text-center  items-center px-3 py-2 text-sm font-medium sm:text-center text-white bg-blue-700 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-blue-800
              w-full sm:w-auto"
                >
                  Explorar →
                </a>
              </div>
            </div>
          </div>
          {/* finaliza grupo */}
        </div>
      </div>
    </>
  );
};
export default Grupos;
