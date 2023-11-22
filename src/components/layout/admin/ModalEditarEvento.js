import React, { useRef, useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { CuerbookContext } from "../../../context/CuerbookContext";
import { useNavigate, useParams } from "react-router-dom";
import urlAxios from "../../../config/axios";
import Spinner from "../../../components/layout/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import Trix from "trix";

const ModalEditarEvento = ({ isOpen, onClose }) => {
  const trixEditor = useRef(null);
  const { id } = useParams();

  const [auth, guardarAuth] = useContext(CuerbookContext);
  const [tokenCargando, setTokenCargando] = useState(false);
  const [categorias, datoCategorias] = useState([]);
  const navigate = useNavigate();
  const [evento, datoEvento] = useState({
    name: "",
    cupo: "",
    fecha: new Date(),
    lugar: "",
    description: "",
    categoryId: "",
    status: false,
  });

  // console.log(evento);
  const handleTrixChange = () => {
    if (trixEditor.current) {
      const value = trixEditor.current.innerHTML;
      datoEvento({
        ...evento,
        description: value,
      });
    }
  };

  useEffect(() => {
    if (trixEditor.current) {
      trixEditor.current.innerHTML = evento.description;
      trixEditor.current.addEventListener("trix-change", handleTrixChange);
    }
    return () => {
      if (trixEditor.current) {
        trixEditor.current.removeEventListener("trix-change", handleTrixChange);
      }
    };
  }, [evento.imagen]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      guardarAuth({
        access_token: token,
        auth: true,
      });

      setTokenCargando(true);
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  }, [navigate, guardarAuth]);

  const consultarEvento = async () => {
    const eventoConsulta = await urlAxios.get(`/events/${id}`);

    console.log(eventoConsulta.data.data);
    datoEvento({
      ...eventoConsulta.data.data,
      categoryId: eventoConsulta.data.data.Categories.id,
    });
  };

  useEffect(() => {
    consultarEvento();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      guardarAuth({
        access_token: token,
        auth: true,
      });

      setTokenCargando(true);
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  }, [navigate, guardarAuth]);

  const eventoState = (e) => {
    if (e.target.name === "imagen") {
      datoEvento({
        ...evento,
        imagen: e.target.files[0],
      });
    } else if (e.target.name === "status") {
      datoEvento({
        ...evento,
        status: e.target.checked,
      });
    } else if (e.target.name === "categoryId") {
      const categoriaId = parseInt(e.target.value, 10);
      datoEvento({
        ...evento,
        categoryId: categoriaId,
      });
    } else {
      datoEvento({
        ...evento,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validarEvento = () => {
    const { name, cupo, fecha, lugar, categoryId, description } = evento;

    return (
      !name.length || !description || !cupo || !categoryId || !fecha || !lugar
    );
  };

  const guardarEvento = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    if (token) {
      const formData = new FormData();
      formData.append("name", evento.name);
      formData.append("imagen", evento.imagen);
      const cupoFormato = parseInt(evento.cupo, 10);
      formData.append("cupo", cupoFormato);
      if (evento.fecha instanceof Date) {
        const formatoFecha = evento.fecha.toISOString();
        formData.append("fecha", formatoFecha);
      }
      formData.append("lugar", evento.lugar);
      formData.append("categoryId", evento.categoryId);
      formData.append("description", evento.description);
      formData.append("status", evento.status);

      urlAxios
        .patch(`/events/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          Swal.fire(
            "Evento registrado",
            "El evento se ha registrado correctamente",
            "success"
          );

          setTimeout(() => {
            window.location.reload();
          }, 2000);

          onClose();
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          Swal.fire("Error", errorMessage, "error");
        });
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  };

  const consultarCategorias = async () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      try {
        const categoriasConsulta = await urlAxios.get("/categories", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        datoCategorias(categoriasConsulta.data.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/itnl/iniciar-sesion");
        }
      }
    } else {
      navigate("/itnl/iniciar-sesion");
    }
  };

  useEffect(() => {
    consultarCategorias();
  }, [categorias]);

  if (!tokenCargando || !auth.auth) {
    return <Spinner />;
  }

  return (
    <>
      {isOpen && (
        <div className="fixed mt-0 top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full bg-gray-800 bg-opacity-80  z-50">
          <div className="p-4 bg-gray-800 rounded-lg max-w-sm md:max-w-2xl lg:max-w-4xl">
            <div className="flex border-b border-gray-700">
              <h2 className="text-2xl text-gray-900 dark:text-white mb-4">
                Editar Evento
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:text-gray-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover-bg-gray-600 dark:hover-text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l 4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <form className="bg-gray-800 " onSubmit={guardarEvento}>
              <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-2 ">
                <div className="lg:mb-2">
                  <label className="block mb-2 pt-1 lg:pt-4  text-sm font-medium text-white">
                    Nombre del evento
                  </label>
                  <input
                    onChange={eventoState}
                    name="name"
                    type="text"
                    value={evento.name}
                    className="border text-sm rounded-lg  block w-full pl-2.5 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Evento de..."
                  />
                </div>
                <div className="lg:mb-2">
                  <label className="block mb-2 pt-1 lg:pt-4  text-sm font-medium text-white">
                    Cupo del evento
                  </label>
                  <input
                    onChange={eventoState}
                    name="cupo"
                    type="number"
                    value={evento.cupo}
                    className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Evento de..."
                  />
                </div>

                <div className="lg:mb-2">
                  <label className="block mb-2 pt-1 lg:pt-4  text-sm font-medium text-white">
                    Lugar del evento
                  </label>
                  <input
                    onChange={eventoState}
                    name="lugar"
                    value={evento.lugar}
                    type="text"
                    className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Evento de..."
                  />
                </div>
                <div className="lg:mb-2">
                  <label className="block mb-2 pt-1 lg:pt-4  text-sm font-medium text-white">
                    Categoria del evento
                  </label>
                  <select
                    name="categoryId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={eventoState}
                    value={evento.categoryId}
                  >
                    <option disabled value="">
                      Selecciona una categoria
                    </option>
                    {categorias.map((categoria) => (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="lg:mb-2">
                  <label className="block mb-2 lg:pt-4 pt-1  text-sm font-medium text-gray-900 dark:text-white">
                    Imagen del evento
                  </label>
                  <input
                    className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="file"
                    name="imagen"
                    onChange={eventoState}
                  />
                  <div className=" text-sm text-gray-500 pt-1 dark:text-gray-300">
                    Solo se permiten imágenes tipo jpg, png, jpeg, gif
                  </div>
                </div>
                <div>
                  <label className="block ml-2 lg:mt-4  text-sm font-medium text-white">
                    Estatus del evento
                  </label>
                  <input
                    className="mr-2 ml-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-['']
  "
                    type="checkbox"
                    role="switch"
                    checked={evento.status}
                    onChange={() => {
                      datoEvento({
                        ...evento,
                        status: !evento.status,
                      });
                    }}
                  />
                  <label
                    className={`inline-block pl-[0.15rem]  hover:cursor-pointer ${
                      evento.status ? "text-blue-400" : "text-red-400"
                    }`}
                  >
                    {" "}
                    {evento.status ? "Activo" : "Inactivo"}
                  </label>
                </div>
              </div>
              <div>
                <div className="lg:mb-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-2">
                    Fecha del evento
                  </label>
                  <DatePicker
                    selected={evento.fecha && new Date(evento.fecha)}
                    onChange={(date) => datoEvento({ ...evento, fecha: date })}
                    locale={es}
                    showTimeSelect
                    timeIntervals={15}
                    timeCaption="Hora"
                    dateFormat="dd/MM/yyyy h:mm aa"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 pt-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Descripcion del evento
                  </label>
                  <trix-editor
                    ref={trixEditor}
                    value={evento.description}
                    input="trix"
                  />
                </div>
              </div>

              <button
                disabled={validarEvento()}
                type="submit"
                className="text-white bg-blue-700 mb-4 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
              >
                Actualizar Evento
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalEditarEvento;