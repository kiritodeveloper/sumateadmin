import React, { useState } from "react";

const Salida = () => {
  // Estado para los elementos en cada card
  const [leftItems, setLeftItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [rightItems, setRightItems] = useState<string[]>([]);

  // Mover elemento a la derecha
  const moveToRight = (index: number) => {
    const item = leftItems[index];
    setLeftItems(leftItems.filter((_, i) => i !== index));
    setRightItems([...rightItems, item]);
  };

  // Mover elemento a la izquierda
  const moveToLeft = (index: number) => {
    const item = rightItems[index];
    setRightItems(rightItems.filter((_, i) => i !== index));
    setLeftItems([...leftItems, item]);
  };

  return (
    <>
      <div className="space-y-4 shadow-default dark:border-strokedark dark:bg-boxdark dark:shadow-none">
      <div className="flex items-center justify-center">
        <div className="flex w-full gap-6 p-6">
          {/* Card Izquierdo */}
          <div className="w-1/2 p-4 border rounded-lg shadow-md bg-white dark:bg-boxdark">
            <h3 className="text-lg font-semibold text-center mb-4">Servicio en Espera De salir</h3>
            <ul className="space-y-2">
              {leftItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between p-3 bg-gray-200 rounded-md shadow-md cursor-pointer hover:bg-gray-300 transition"
                >
                  {item}
                  <button
                    onClick={() => moveToRight(index)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  >
                    ➡
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Derecho */}
          <div className="w-1/2 p-4 border rounded-lg shadow-md bg-white dark:bg-boxdark">
            <h3 className="text-lg font-semibold text-center mb-4">Destino</h3>
            <ul className="space-y-2">
              {rightItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between p-3 bg-gray-200 rounded-md shadow-md cursor-pointer hover:bg-gray-300 transition"
                >
                  {item}
                  <button
                    onClick={() => moveToLeft(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    ⬅
                  </button>
                </li>
              ))}
            </ul>
            <div >
            <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <td className="text-right">
                      Total Monto 130 Bs
                    </td>
                    <td className="text-right">
                      <button className="flex items-center space-x-2 text-white px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                        <path d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                        <span className="font-semibold">Registrar Salida</span>
                      </button>
                    </td>
                  </tr>
                </thead>
            </table>
            </div>
          </div>
        </div>
      </div>

      <div>
      <h5 className="text-2xl font-semibold text-center">Lista de Salidas del día</h5>

        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#1c2c43] dark:bg-[#6e89af] text-white dark:text-white">
              <th className="px-4 py-2">Nombre del Conductor</th>
              <th className="px-4 py-2">Placa</th>
              <th className="px-4 py-2">Destino</th>
              <th className="px-4 py-2">Monto</th>
              <th className="px-4 py-2">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">New Company Takeover Review</td>
              <td className="border px-4 py-2">Deveint Inc</td>
              <td className="border px-4 py-2">18</td>
              <td className="border px-4 py-2">35%</td>
              <td className="border px-4 py-2">
                <button className="px-4 py-2 text-white rounded-full metallic-button-trash">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      </div>
    </>
  );
};

export default Salida;
