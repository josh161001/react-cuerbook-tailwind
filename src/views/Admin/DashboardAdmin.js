import React, { useEffect, useState } from "react";
import MenuHamburguesaAdmin from "../../components//layout/admin/MenuHamburguesaAdmin";
import TableUser from "../../components/layout/admin/TableUser";
import Cantidad from "../../components//layout/Cantidad";
import { Link } from "react-router-dom";

const DashboardAdmin = () => {
  const Toast = ({ mostrar, setMostrar, mensaje, link, bottom }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setMostrar(false);
      }, 4000);
      return () => clearTimeout(timer);
    }, []);

    return mostrar ? (
      <div
        className="fixed inset-x-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-10"
        style={{ bottom: bottom }}
      >
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">{mensaje}</p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <Link
                  to={link}
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a1 1 0 000-2h8a1 1 0 100-2H3.414l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L3.414 7H10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  };

  const [mostrarToastEventos, setMostrarToastEventos] = useState(true);
  const [mostrarToastGrupos, setMostrarToastGrupos] = useState(true);

  return (
    <>
      <Toast
        mostrar={mostrarToastEventos}
        setMostrar={setMostrarToastEventos}
        mensaje="No olvides revisar los eventos pendientes"
        link="/admin/eventos"
        bottom="0"
      />
      <Toast
        mostrar={mostrarToastGrupos}
        setMostrar={setMostrarToastGrupos}
        mensaje="No olvides revisar los grupos pendientes"
        link="/admin/grupos"
        bottom="80px"
      />
      <MenuHamburguesaAdmin />
      <div className="sm:ml-64">
        <div className="p-4  rounded-lg  mt-14">
          <div className="grid grid-cols-2 lg:grid-cols-5  gap-4 mb-4">
            <Cantidad />
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
