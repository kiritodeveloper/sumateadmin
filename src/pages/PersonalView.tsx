import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import UserM from '../images/user/logouser.png';
import UserF from '../images/user/femenino.png';
const PersonalView = () => {
  // Obtener el parámetro 'id' de la URL
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [personData, setPersonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/getpersoncorrecaminos/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then(data => {
        setPersonData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  const tabTitles = ["Licencia de conducir", "Movilidades", "Actividad en la sociedad"];

  const tabContents = [
    // Tab 1: Recent Activity
    <div className="space-y-4 shadow-default dark:border-strokedark dark:bg-boxdark dark:shadow-none">
      <div className="flex items-center space-x-4 justify-center">
        <button className="flex items-center space-x-4 text-white rounded-full metallic-button-Licencia">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5 space-x-4">
            <path d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
          </svg>
          Registrar Licencia De Conducir
        </button>
      </div>
      <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="bg-[#1c2c43] dark:bg-[#6e89af] text-white dark:text-white">
          <th className="px-4 py-2">Fecha de registro</th>
          <th className="px-4 py-2">Número de licencia</th>
          <th className="px-4 py-2">Categoría</th>
          <th className="px-4 py-2">Fecha de validez</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">New Company Takeover Review</td>
            <td className="border px-4 py-2">Deveint Inc</td>
            <td className="border px-4 py-2">18</td>
            <td className="border px-4 py-2">35%</td>
          </tr>
        </tbody>
      </table>
    </div>,
    // Tab 2: Projects Worked on
    <div className="space-y-4">
    <div className="flex items-center space-x-4 justify-center">
      <button className="flex items-center space-x-4 text-white rounded-full metallic-button-Licencia">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5 space-x-4">
          <path d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
        </svg>
        Registrar movilidad
      </button>
    </div>
    <table className="min-w-full table-auto border-collapse">
    <thead>
      <tr className="bg-[#1c2c43] dark:bg-[#6e89af] text-white dark:text-white">
      <th className="px-4 py-2">foto</th>
        <th className="px-4 py-2">Marca</th>
        <th className="px-4 py-2">Placa</th>
        <th className="px-4 py-2">ruat</th>
        <th className="px-4 py-2">color</th>
        <th className="px-4 py-2">modelo</th>
        <th className="px-4 py-2">estado</th>
        <th className="px-4 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
          <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        </th>
      </tr>
    </thead>
      <tbody>
        <tr>
        <td className="border px-4 py-2">
        </td>
        <td className="border px-4 py-2">toyota</td>
          <td className="border px-4 py-2">7414xyu</td>
          <td className="border px-4 py-2">154541</td>
          <td className="border px-4 py-2">blanco</td>
          <td className="border px-4 py-2">2016%</td>
          <td className="border px-4 py-2">activo</td>
          <td className="border px-4 py-2">
          <button className="px-3-k py-3-k  text-white rounded-full metallic-button-trash">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-3">
              <path  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>,
    // Tab 3: Profile
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="card p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-lg flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-4xl">321554645 Bs.</h1>
          Ganancias por encomiendas
        </div>
        <div className="card p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-lg flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-4xl">321554645 Bs.</h2>
          Ganancias por viajes
        </div>
      </div>
    </div>


  ];

  return (
    <>
      <div className="flex rounded-md border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="w-1/3 p-4 bg-white dark:bg-boxdark shadow-lg rounded-lg">
          {loading ? (
            <p>Cargando...</p>
          ) : personData ? (
            <>
            <div className="profile_img flex justify-center">
              <img
                src={personData.foto ? `data:image/png;base64,${personData.foto}` : (personData.sexo === 'M' ? UserM : UserF)}
                alt="User Profile"
                className="img-responsive avatar-view rounded-full w-32 h-32 object-cover"
              />
            </div>
              <h3 className="text-xl font-semibold text-center uppercase">{personData.name} {personData.ap_paterno} {personData.ap_materno}</h3>
              <ul className="list-none user_data space-y-2">
              <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              {personData.ci}
              </li>
                <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                  <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>{personData.direccion}</li>
                <li className="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-6">
                    <path  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                   {personData.estado_civil}
                  </li>
                <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                  <path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
                  {personData.sexo === 'M' ? 'Masculino' : personData.sexo === 'F' ? 'Femenino' : 'No especificado'}
                </li>
              </ul>
            </>
          ) : (
            <p>No se encontraron datos.</p>
          )}
        </div>

        {/* Contenedor para Tabs */}
        <div className="w-2/3 p-4 bg-white dark:bg-boxdark shadow-lg rounded-lg">
          <div className="bg-white dark:bg-boxdark shadow rounded-lg p-6">
            <div className="mb-4 flex space-x-4 border-b border-gray-300 dark:border-strokedark">
              {tabTitles.map((title, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === index
                      ? "border-b-2 border-teal-600 text-teal-600"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {title}
                </button>
              ))}
            </div>

            <div className="py-4">{tabContents[activeTab]}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalView;
