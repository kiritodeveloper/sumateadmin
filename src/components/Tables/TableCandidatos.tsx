import { useState, useEffect, Fragment } from "react";
import { BRAND } from "../../types/brand";
import { Dialog, Transition } from "@headlessui/react";

const API_URL = import.meta.env.VITE_API_URL + "/listcandidatos";
const SAVE_USER_URL = import.meta.env.VITE_API_URL + "/saveuser"; // Endpoint para guardar usuario
const KEY_SYSTEM = import.meta.env.VITE_APP_KEY;
const initialBrands: BRAND[] = [];
const BrandList = ({ brands, onUserSaved }: { brands: BRAND[]; onUserSaved: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    nombre_completo: "",
    cartera: "",
    lugar: "",
    ci: "",
    biografia: ""
  });

  const fetchBrands = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setBrands(data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error("Error al obtener marcas:", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const saveUser = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(SAVE_USER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.status) {
        throw new Error("Error al guardar el usuario");
      }
      const result = await response.json();
      if (result.status) {
        console.log("Usuario guardado correctamente");
        setIsOpen(false); // Cerrar el modal al guardar con éxito
        onUserSaved(); // Actualizar la tabla al guardar un usuario
      } else {
        console.error("Error al guardar el usuario:", result.message);
      }
    } catch (err) {
      console.error("Hubo un problema al guardar los datos:", err);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/deleteusercorrecacminos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), // Enviar el ID en el cuerpo
      });

      if (response.ok) {
        console.log(`Elemento con ID ${id} eliminado`);
        window.location.reload();
      } else {
        console.error("Error al eliminar");
      }
    } catch (error) {
      console.error("Error en la petición", error);
    }
  };



  return (
    <div className="rounded-md border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col items-end space-y-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg"
        >
          Agregar Candidato
        </button>
        <br />
      </div>
      <div className="grid grid-cols-3 rounded-sm bg-gray-2 py-2.5 dark:bg-meta-4 sm:grid-cols-4">
        <p className="text-center font-medium uppercase text-black dark:text-white">nombre</p>
        <p className="text-center font-medium uppercase text-black dark:text-white">Cartera</p>
        <p className="text-center font-medium uppercase text-black dark:text-white">lugar</p>
        <p className="hidden text-center font-medium uppercase text-black dark:text-white sm:block">Opciones</p>
      </div>
      {brands.map((brand, key) => (
        <div key={key} className="grid grid-cols-3 border-b border-stroke py-2.5 dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3">
            <p className="hidden sm:block text-black dark:text-white">{brand.nombre_completo}</p>
          </div>
          <p className="text-center text-black dark:text-white">{brand.cargo_postula}</p>
          <p className="text-center font-medium">
            <span
              className={`px-2 py-1 text-xs font-semibold border rounded-full
                ${
                  brand.ci === "static"
                    ? "text-white bg-blue-600 border-blue-600 dark:bg-blue-400 dark:border-blue-400"
                    : "text-white bg-green-600 border-green-600 dark:bg-green-400 dark:border-green-400"
                }`}
            >
              CI-{brand.ci}
            </span>
          </p>


          <p className="hidden text-center sm:block text-black dark:text-white">
            <button className="px-4-k py-4-k  text-white rounded-full metallic-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                <path d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
              </svg>
            </button>
            <button onClick={() => handleDelete(brand.id)} className="px-4-k py-4-k  text-white rounded-full metallic-button-trash">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
              <path  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </button>
          </p>
        </div>
      ))}

      {/* Modal de Registro */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-75" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-96 rounded-lg bg-white p-6 shadow-xl dark:bg-boxdark dark:text-white">
              <Dialog.Title className="text-lg font-bold">Registro de nuevo candidato</Dialog.Title>

              <form className="mt-4" onSubmit={saveUser}>
                <label className="block text-sm font-medium dark:text-gray-300">Nombre</label>
                <input
                  type="text"
                  name="nombre_completo"
                  value={newUser.nombre_completo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Ingresa tu nombre"
                />

                <label className="block text-sm font-medium mt-2 dark:text-gray-300">cartera</label>
                <input
                  type="text"
                  name="cartera"
                  value={newUser.cartera}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Ingresa la cartera que ocupara"
                />
                <label className="block text-sm font-medium mt-2 dark:text-gray-300">lugar o circunscripcion</label>
                <input
                  type="text"
                  name="lugar"
                  value={newUser.lugar}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Ingresa el lugar"
                />
                <input
                  type="text"
                  name="ci"
                  value={newUser.ci}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Ingresa el ci"
                />
                <input
                  type="text"
                  name="biografia"
                  value={newUser.biografia}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Ingresa su biografia"
                />       
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border rounded-lg dark:border-gray-500 dark:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg dark:bg-blue-500"
                  >
                    Registrar candidato
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

const TableCandidatos = () => {
  const [brands, setBrands] = useState<BRAND[]>(initialBrands);

  // Consumir la API cuando el componente se monta
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        const data = await response.json();
        setBrands(data);  // Actualiza el estado con los datos de la API
      } catch (err) {
        console.error("Hubo un problema al cargar los datos:", err);
      }
    };

    fetchBrands(); // Llamar a la función cuando el componente se monta
  }, []); // Solo se ejecuta una vez, cuando el componente se monta

  // Función para actualizar la tabla después de guardar un usuario
  const handleUserSaved = () => {
    // Volver a hacer la petición para obtener los datos actualizados
    const fetchBrands = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        const data = await response.json();
        setBrands(data);  // Actualiza el estado con los datos de la API
      } catch (err) {
        console.error("Hubo un problema al cargar los datos:", err);
      }
    };

    fetchBrands();
  };

  return (
    <div className="col-span-6 xl:col-span-6">
      <BrandList brands={brands} onUserSaved={handleUserSaved} />
    </div>
  );
};

export default TableCandidatos;
