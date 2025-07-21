import React, { useState } from "react";

const RPTencomineda = () => {
  return (
    <>
      <div className="space-y-4 shadow-default dark:border-strokedark dark:bg-boxdark dark:shadow-none">
      <div className="flex items-center justify-center">
        <h5 className="text-4xl font-bold text-center">Historial De Envio y Reccepcion de Encomiendas</h5>
      </div>
        <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-[#1c2c43] dark:bg-[#6e89af] text-white dark:text-white">
            <th className="px-4 py-2">Nombre del Servicio</th>
            <th className="px-4 py-2">Codigo SIN</th>
            <th className="px-4 py-2">Codigo PS</th>
            <th className="px-4 py-2">Codigo Interno</th>
            <th className="px-4 py-2">Precio</th>
            <th className="px-4 py-2">Unidad Medida</th>
            <th className="px-4 py-2">Codigo Actividad</th>
            <th className="px-4 py-2">Tipo</th>
            <th className="px-4 py-2">opciones</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">New Company Takeover Review</td>
              <td className="border px-4 py-2">Deveint Inc</td>
              <td className="border px-4 py-2">18</td>
              <td className="border px-4 py-2">35%</td>
              <td className="border px-4 py-2">35%</td>
              <td className="border px-4 py-2">35%</td>
              <td className="border px-4 py-2">35%</td>
              <td className="border px-4 py-2">envio de paquetes</td>
              <td className="border px-4 py-2">
                <button className="px-4-k py-4-k  text-white rounded-full metallic-button-trash">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">New Company Takeover Review</td>
              <td className="border px-4 py-2">Deveint Inc</td>
              <td className="border px-4 py-2">18</td>
              <td className="border px-4 py-2">35%</td>
              <td className="border px-4 py-2">35%</td>
              <td className="border px-4 py-2">35%</td>
              <td className="border px-4 py-2">35%</td>
              <td className="border px-4 py-2">viajes</td>
              <td className="border px-4 py-2">
                <button className="px-4-k py-4-k  text-white rounded-full metallic-button-trash">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RPTencomineda;
