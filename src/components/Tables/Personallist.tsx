import { useState, useEffect, Fragment } from "react";
import { BRAND } from "../../types/brand";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL + "/getpersonal";
const SAVE_USER_URL = import.meta.env.VITE_API_URL + "/savedatoscorrecaminos"; // Endpoint para guardar usuario
const KEY_SYSTEM = import.meta.env.VITE_APP_KEY;
const initialBrands: BRAND[] = [];
const BrandList = ({ brands, onUserSaved }: { brands: BRAND[]; onUserSaved: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    ci: "",
    ap_paterno:"",
    ap_materno:"",
    email: "",
    address: "",
    sex: "",
    civilStatus: "",
    phone: ["", ""], // Aquí almacenaremos los dos teléfonos en un array
    profession: "",
    profileImage: null,
  });

  const [editUser, setEditUser] = useState<User>({
    id: 0,
    name: '',
    ci: '',
    ap_paterno: '',
    ap_materno: '',
    address: '',
    sex: '',
    civilStatus: '',
    profession: '',
    phone: ['', ''],
    profileImage: null,
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
  const handleEdit  = (userId: number) => {
    // Llamada al endpoint para obtener los datos del usuario
    fetch(`${import.meta.env.VITE_API_URL}/getpersoncorrecaminos/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const mappedData = {
          name: data.name,
          ci: data.ci,
          ap_paterno: data.ap_paterno,
          ap_materno: data.ap_materno,
          address: data.direccion,
          sex: data.user_sexo,
          civilStatus: data.estado_civil,
          profession: data.profession,
        };

        setEditUser(mappedData);
        setIsEditModalOpen(true); // Abrir el modal
      })
      .catch((error) => console.error('Error al cargar los datos del usuario:', error));
  };

  const saveUser = async (e) => {
    e.preventDefault();

    // Crear FormData para enviar todos los datos
    const formData = new FormData();
    formData.append("name", newUser.name);
    formData.append("ci", newUser.ci);
    formData.append("ap_paterno", newUser.ap_paterno);
    formData.append("ap_materno", newUser.ap_materno);
    formData.append("direccion", newUser.address);
    formData.append("sexo", newUser.sex);
    formData.append("estado_civil", newUser.civilStatus);
    formData.append("profecion", newUser.profession);
    formData.append("telefono[]", newUser.phone[0]); // Primer teléfono
    formData.append("telefono[]", newUser.phone[1]);
    formData.append("profession", newUser.profession);
    if (newUser.profileImage) {
      formData.append("profileImage", newUser.profileImage); // Añadir la imagen al FormData
    }

    // Enviar los datos a través de fetch o axios
    try {
      const response = await fetch(SAVE_USER_URL, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setIsOpen(false); // Cerrar el modal al guardar con éxito
        onUserSaved(); // Actualizar la tabla al guardar un usuario
      } else {
        // Lógica si hay un error
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
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

  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (

    <div className="rounded-md border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col items-end space-y-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg flex items-center space-x-3"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-5">
          <path  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>  Agregar personas al sistema
        </button>
        <br />
      </div>
      <div className="grid grid-cols-3 rounded-sm bg-gray-2 py-2.5 dark:bg-meta-4 sm:grid-cols-6">
        <p className="text-center font-medium uppercase text-black dark:text-white">NOmbre  completo</p>
        <p className="text-center font-medium uppercase text-black dark:text-white">Cedula Identidad</p>
        <p className="text-center font-medium uppercase text-black dark:text-white">estado civil</p>
        <p className="text-center font-medium uppercase text-black dark:text-white">telefonos</p>
        <p className="text-center font-medium uppercase text-black dark:text-white">Direccion</p>
        <p className="hidden text-center font-medium uppercase text-black dark:text-white sm:block">Opciones</p>
      </div>
      {brands.map((brand, key) => (
        <div key={key} className="grid grid-cols-3 border-b border-stroke py-2.5 dark:border-strokedark sm:grid-cols-6">
          <div className="flex items-center gap-3">
            <p className="hidden sm:block text-black dark:text-white">{brand.name} {brand.ap_paterno} {brand.ap_materno}</p>
          </div>
          <p className="text-center text-black dark:text-white">{brand.ci}</p>
          <p className="text-center font-medium">
            <span
              className={`px-2 py-1 text-xs font-semibold border rounded-full
                ${
                  brand.estado_civil === "soltero"
                    ? "text-white bg-gray-600 border-gray-600 dark:bg-gray-400 dark:border-gray-400"
                  : brand.estado_civil === "casado"
                    ? "text-white bg-blue-600 border-blue-600 dark:bg-blue-400 dark:border-blue-400"
                  : brand.estado_civil === "divorciado"
                    ? "text-white bg-red-600 border-red-600 dark:bg-red-400 dark:border-red-400"
                  : brand.estado_civil === "viudo"
                    ? "text-white bg-yellow-600 border-yellow-600 dark:bg-yellow-400 dark:border--400"
                    : "text-white bg-green-600 border-green-600 dark:bg-green-400 dark:border-green-400"
                }
              `}
            >
              {brand.estado_civil}
            </span>
          </p>
          <p className="text-center text-black dark:text-white">
            {Array.isArray(brand.telefonos) && brand.telefonos.length > 0 ? (
              // Si brand.telefonos es un array, mapeamos los elementos
              brand.telefonos.map((telefono, index) => (
                <span
                  className="px-2 py-1 text-xs font-semibold border rounded-full text-white bg-yellow-600 border-yellow-600 dark:bg-yellow-400 dark:border-yellow-400 my-2 px-3 py-1 rounded"
                  key={index}
                >
                  {telefono}
                </span>

              ))
            ) : brand.telefonos && brand.telefonos.length > 0 ? (
              // Si brand.telefonos es una cadena en formato {numero1,numero2}, lo procesamos
              brand.telefonos
                .replace(/[{}"]/g, '') // Eliminar llaves y comillas
                .split(',') // Convertir la cadena en un array
                .map((telefono, index) => (
                  <span
                    className="px-2 py-1 text-xs font-semibold border rounded-full text-white bg-yellow-600 border-yellow-600 dark:bg-yellow-400 dark:border-yellow-400 my-2 px-3 py-1 rounded"
                    key={index}
                  >
                    {telefono}
                  </span>
                ))
            ) : (
              <span>No hay teléfonos disponibles</span>
            )}
          </p>


          <p className="text-center text-black dark:text-white">{brand.direccion}</p>

          <p className="hidden text-center sm:block text-black dark:text-white">
          <button
            className="px-4-k py-4-k  text-white rounded-full metallic-button-Licencia">
            <Link to={`/personalview/${brand.id}`} className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5">
                <path d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
            </Link>
          </button>
            <button
            onClick={() => {
              setIsEditModalOpen(false);
              handleEdit(brand.id);
            }}
              className="px-4-k py-4-k  text-white rounded-full metallic-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5">
              <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            </button>
            <button onClick={() => handleDelete(brand.id)} className="px-4-k py-4-k  text-white rounded-full metallic-button-trash">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
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
            <Dialog.Panel className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-xl dark:bg-boxdark dark:text-white">
              <Dialog.Title className="text-lg font-bold text-center mb-4">
                Registro Nuevo Personal
              </Dialog.Title>
              <form className="grid grid-cols-4 gap-4" onSubmit={saveUser}>
                {/* Primera columna - Imagen */}
                <div className="flex flex-col items-center">
                  <label className="block text-sm font-medium dark:text-gray-300">Foto de Perfil</label>
                  <label className="mt-2 cursor-pointer flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full dark:bg-gray-700">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Vista previa"
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-600 dark:text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10l1.553 1.553a4 4 0 005.656 0L12 10m0 0l1.791 1.553a4 4 0 005.656 0L21 10m-9 4v4m0 0h-2m2 0h2M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2h-2.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0013.414 3H10.586a1 1 0 00-.707.293L8.464 4.707A1 1 0 007.757 5H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Segunda columna - Nombre ocupa dos columnas */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium dark:text-gray-300">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                {/* Tercera columna */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Cedula de identidad</label>
                  <input
                    type="text"
                    name="ci"
                    value={newUser.ci}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Ingresa Cedula Identidad"
                  />
                </div>

                {/* Cuarta columna */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Apellido Paterno</label>
                  <input
                    type="text"
                    name="ap_paterno"
                    value={newUser.ap_paterno}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Apellido Paterno"
                  />
                </div>

                {/* Fila siguiente */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Apellido Materno</label>
                  <input
                    type="text"
                    name="ap_materno"
                    value={newUser.ap_materno}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Apellido Materno"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Dirección</label>
                  <input
                    type="text"
                    name="address"
                    value={newUser.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Ingresa tu dirección"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Sexo</label>
                  <select
                    name="sex"
                    value={newUser.sex}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="NF">No Definido</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Estado Civil</label>
                  <select
                    name="civilStatus"
                    value={newUser.civilStatus}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="soltero">Soltero</option>
                    <option value="casado">Casado</option>
                    <option value="divorciado">Divorciado</option>
                    <option value="viudo">Viudo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Telefono Principal</label>
                  <input
                    type="text"
                    name="phone[0]" // Indica que este es el primer teléfono
                    value={newUser.phone[0]} // Accede al primer valor del array
                    onChange={(e) => {
                      const newPhones = [...newUser.phone];
                      newPhones[0] = e.target.value;
                      setNewUser((prevState) => ({ ...prevState, phone: newPhones }));
                    }}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Telefono Principal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Telefono Secundario</label>
                  <input
                    type="text"
                    name="phone[1]" // Indica que este es el segundo teléfono
                    value={newUser.phone[1]} // Accede al segundo valor del array
                    onChange={(e) => {
                      const newPhones = [...newUser.phone];
                      newPhones[1] = e.target.value;
                      setNewUser((prevState) => ({ ...prevState, phone: newPhones }));
                    }}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Telefono Secundario"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Profesión</label>
                  <input
                    type="text"
                    name="profession"
                    value={newUser.profession}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Profesión"
                  />
                </div>

                {/* Botones debajo del formulario */}
                <div className="col-span-4 flex justify-end gap-2 mt-4">
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
                    Registrar
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isEditModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsEditModalOpen(false)}>
          <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-75" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-xl dark:bg-boxdark dark:text-white">
              <Dialog.Title className="text-lg font-bold text-center mb-4">
                Editar Usuario
              </Dialog.Title>
              <form className="grid grid-cols-4 gap-4" onSubmit={saveUser}>
                {/* Primera columna - Imagen */}
                <div className="flex flex-col items-center">
                  <label className="block text-sm font-medium dark:text-gray-300">Foto de Perfil</label>
                  <label className="mt-2 cursor-pointer flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full dark:bg-gray-700">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Vista previa"
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-600 dark:text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10l1.553 1.553a4 4 0 005.656 0L12 10m0 0l1.791 1.553a4 4 0 005.656 0L21 10m-9 4v4m0 0h-2m2 0h2M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2h-2.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0013.414 3H10.586a1 1 0 00-.707.293L8.464 4.707A1 1 0 007.757 5H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Segunda columna - Nombre ocupa dos columnas */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium dark:text-gray-300">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={editUser.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                {/* Tercera columna */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Cedula de identidad</label>
                  <input
                    type="text"
                    name="ci"
                    value={editUser.ci}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Ingresa Cedula Identidad"
                  />
                </div>

                {/* Cuarta columna */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Apellido Paterno</label>
                  <input
                    type="text"
                    name="ap_paterno"
                    value={editUser.ap_paterno}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Apellido Paterno"
                  />
                </div>

                {/* Fila siguiente */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Apellido Materno</label>
                  <input
                    type="text"
                    name="ap_materno"
                    value={editUser.ap_materno}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Apellido Materno"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Dirección</label>
                  <input
                    type="text"
                    name="address"
                    value={editUser.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Ingresa tu dirección"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Sexo</label>
                  <select
                    name="sex"
                    value={editUser.sex}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="NF">No Definido</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Estado Civil</label>
                  <select
                    name="civilStatus"
                    value={editUser.civilStatus}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="soltero">Soltero</option>
                    <option value="casado">Casado</option>
                    <option value="divorciado">Divorciado</option>
                    <option value="viudo">Viudo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Telefono Principal</label>
                  <input
                    type="text"
                    name="phone[0]" // Indica que este es el primer teléfono
                    value={newUser.phone[0]} // Accede al primer valor del array
                    onChange={(e) => {
                      const newPhones = [...newUser.phone];
                      newPhones[0] = e.target.value;
                      setNewUser((prevState) => ({ ...prevState, phone: newPhones }));
                    }}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Telefono Principal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Telefono Secundario</label>
                  <input
                    type="text"
                    name="phone[1]" // Indica que este es el segundo teléfono
                    value={newUser.phone[1]} // Accede al segundo valor del array
                    onChange={(e) => {
                      const newPhones = [...newUser.phone];
                      newPhones[1] = e.target.value;
                      setNewUser((prevState) => ({ ...prevState, phone: newPhones }));
                    }}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Telefono Secundario"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium dark:text-gray-300">Profesión</label>
                  <input
                    type="text"
                    name="profession"
                    value={newUser.profession}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Profesión"
                  />
                </div>

                {/* Botones debajo del formulario */}
                <div className="col-span-4 flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 border rounded-lg dark:border-gray-500 dark:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg dark:bg-blue-500"
                  >
                    Registrar
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

const Personallist = () => {
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

export default Personallist;
