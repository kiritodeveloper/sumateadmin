import React, { useState } from "react";

const Service = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  // Funciones para abrir los modales
  const openModal1 = () => setIsModalOpen1(true);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModalVS = () => {
    setIsModalOpen1(false);
  };
  return (
    <>
      <div className="space-y-4 shadow-default dark:border-strokedark dark:bg-boxdark dark:shadow-none">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center py-2" style={{ marginTop: "18px", gap: "10px" }}>
            {/* Botón para abrir el modal de Viajes / Salidas */}
            <button
              className="flex flex-col items-center text-white px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all w-48"
              onClick={openModal1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 1024 1024" fill="#fff" className="icon" version="1.1">
              <path d="M232.016 448.004c-4.42 0-8-3.578-8-8V168.022c0-4.422 3.578-8 8-8 4.422 0 8 3.578 8 8v271.982c0 4.422-3.578 8-8 8z" fill=""/>
              <path d="M536 448.004H232.016c-4.42 0-8-3.578-8-8 0-4.42 3.578-8 8-8H536c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8zM264.014 384.008a8 8 0 0 1-5.656-13.656l95.994-95.994a8 8 0 1 1 11.312 11.312l-95.994 95.994a7.974 7.974 0 0 1-5.656 2.344z" fill=""/><path d="M408.006 336.01a7.976 7.976 0 0 1-5.656-2.344l-47.998-47.998a8 8 0 1 1 11.312-11.312l47.998 47.998a8 8 0 0 1-5.656 13.656z" fill=""/><path d="M408.006 336.01a8 8 0 0 1-5.656-13.656l127.994-127.992a8 8 0 1 1 11.312 11.312l-127.994 127.992a7.964 7.964 0 0 1-5.656 2.344z" fill=""/><path d="M536 240.016c-4.422 0-8-3.578-8-8V200.02c0-4.422 3.578-8 8-8s8 3.578 8 8v31.998a7.994 7.994 0 0 1-8 7.998z" fill=""/><path d="M536 208.018h-32c-4.422 0-8-3.578-8-8 0-4.422 3.578-8 8-8h32c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8zM624.008 80.026h-224a8.002 8.002 0 0 1-6.656-3.562l-31.998-47.998a7.992 7.992 0 0 1 2.218-11.092 7.99 7.99 0 0 1 11.094 2.218l29.624 44.434h216.408l45.64-45.654a8 8 0 0 1 11.308 11.312l-47.98 47.998a8.004 8.004 0 0 1-5.658 2.344zM352.01 64.028H168.02c-4.42 0-8-3.578-8-8 0-4.42 3.578-8 8-8h183.99c4.42 0 8 3.578 8 8a7.998 7.998 0 0 1-8 8zM855.98 64.028h-183.988c-4.422 0-8-3.578-8-8 0-4.42 3.578-8 8-8h183.988c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8z" fill=""/><path d="M575.996 48.028h-127.992c-4.42 0-8-3.578-8-8 0-4.422 3.578-8 8-8h127.992c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8zM823.98 879.976h-63.996c-4.422 0-8-3.578-8-7.998 0-4.422 3.578-8 8-8h63.996c4.422 0 8 3.578 8 8a7.994 7.994 0 0 1-8 7.998z" fill=""/><path d="M759.984 943.972c-4.422 0-8-3.578-8-7.998v-63.996c0-4.422 3.578-8 8-8s8 3.578 8 8v63.996a7.994 7.994 0 0 1-8 7.998zM384.008 863.978c-79.394 0-143.992-64.59-143.992-143.99 0-79.402 64.598-143.992 143.992-143.992S528 640.586 528 719.988c0 79.4-64.598 143.99-143.992 143.99z m0-271.982c-70.574 0-127.992 57.418-127.992 127.992 0 70.572 57.418 127.992 127.992 127.992S512 790.56 512 719.988c0-70.574-57.418-127.992-127.992-127.992z" fill=""/><path d="M384.008 895.976c-79.394 0-143.992-64.59-143.992-143.992a7.994 7.994 0 0 1 8-7.998c4.42 0 8 3.578 8 7.998 0 70.574 57.418 127.992 127.992 127.992S512 822.558 512 751.984c0-4.42 3.578-7.998 8-7.998s8 3.578 8 7.998c0 79.402-64.598 143.992-143.992 143.992z" fill=""/><path d="M248.016 759.984c-4.422 0-8-3.578-8-8v-31.996c0-4.422 3.578-8 8-8 4.42 0 8 3.578 8 8v31.996c0 4.422-3.578 8-8 8zM520 759.984c-4.422 0-8-3.578-8-8v-31.996c0-4.422 3.578-8 8-8s8 3.578 8 8v31.996c0 4.422-3.578 8-8 8zM384.008 783.984c-35.288 0-63.996-28.704-63.996-63.996 0-35.296 28.708-63.996 63.996-63.996s63.996 28.7 63.996 63.996c0 35.294-28.71 63.996-63.996 63.996z m0-111.994c-26.468 0-47.998 21.53-47.998 47.998 0 26.466 21.53 47.996 47.998 47.996s47.998-21.53 47.998-47.996c-0.002-26.468-21.53-47.998-47.998-47.998z" fill=""/><path d="M437.692 743.986a8.018 8.018 0 0 1-7.672-5.718c-6-20.186-24.92-34.28-46.012-34.28s-40.012 14.094-46.012 34.28c-1.266 4.234-5.672 6.624-9.954 5.39a8.012 8.012 0 0 1-5.39-9.954c8.006-26.92 33.232-45.716 61.356-45.716s53.348 18.796 61.356 45.716a8.012 8.012 0 0 1-5.39 9.954 8.336 8.336 0 0 1-2.282 0.328zM343.932 687.91a7.976 7.976 0 0 1-5.656-2.344l-56.074-56.074a7.996 7.996 0 1 1 11.31-11.31l56.076 56.074a7.996 7.996 0 0 1-5.656 13.654zM384.008 863.978c-4.42 0-8-3.578-8-8v-79.994c0-4.422 3.578-8 8-8s8 3.578 8 8v79.994a7.998 7.998 0 0 1-8 8zM791.984 671.99h-191.988c-4.422 0-8-3.578-8-8a7.994 7.994 0 0 1 8-7.998h191.988c4.422 0 8 3.578 8 7.998 0 4.422-3.578 8-8 8zM791.984 719.988h-191.988c-4.422 0-8-3.578-8-8s3.578-8 8-8h191.988c4.422 0 8 3.578 8 8s-3.578 8-8 8zM791.984 767.984h-191.988c-4.422 0-8-3.578-8-8s3.578-8 8-8h191.988c4.422 0 8 3.578 8 8s-3.578 8-8 8z" fill=""/><path d="M679.988 815.98h-79.992c-4.422 0-8-3.578-8-7.998 0-4.422 3.578-8 8-8h79.992c4.422 0 8 3.578 8 8a7.994 7.994 0 0 1-8 7.998z" fill=""/><path d="M791.984 256.016h-191.988c-4.422 0-8-3.578-8-8 0-4.42 3.578-8 8-8h191.988c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8z" fill=""/><path d="M791.984 304.012h-191.988c-4.422 0-8-3.578-8-8 0-4.422 3.578-8 8-8h191.988c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8z" fill=""/><path d="M791.984 352.01h-191.988c-4.422 0-8-3.578-8-8 0-4.42 3.578-8 8-8h191.988c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8z" fill=""/><path d="M679.988 400.006h-79.992c-4.422 0-8-3.578-8-8 0-4.422 3.578-8 8-8h79.992c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8z" fill=""/><path d="M168.02 975.972c-4.42 0-8-3.578-8-8V56.028c0-4.42 3.578-8 8-8 4.422 0 8 3.578 8 8v911.946a7.994 7.994 0 0 1-8 7.998z" fill=""/><path d="M855.98 895.976c-4.422 0-8-3.578-8-8V56.028c0-4.42 3.578-8 8-8s8 3.578 8 8v831.95a7.994 7.994 0 0 1-8 7.998z" fill=""/><path d="M775.984 975.972a8 8 0 0 1-5.656-13.656l79.996-79.996a8 8 0 1 1 11.312 11.312l-79.996 79.996a7.964 7.964 0 0 1-5.656 2.344z" fill=""/><path d="M775.984 975.972H168.02c-4.42 0-8-3.578-8-8s3.578-8 8-8h607.964c4.422 0 8 3.578 8 8s-3.578 8-8 8z" fill=""/><path d="M903.976 1023.968c-4.422 0-8-3.578-8-8V8.032c0-4.422 3.578-8 8-8s8 3.578 8 8v1007.938a7.994 7.994 0 0 1-8 7.998z" fill=""/><path d="M903.976 1023.968H120.024c-4.422 0-8-3.578-8-8s3.578-8 8-8h783.952c4.422 0 8 3.578 8 8s-3.578 8-8 8z" fill=""/><path d="M120.024 1023.968c-4.422 0-8-3.578-8-8V8.032c0-4.422 3.578-8 8-8 4.42 0 8 3.578 8 8v1007.938a7.994 7.994 0 0 1-8 7.998z" fill=""/><path d="M903.976 16.03H120.024c-4.422 0-8-3.578-8-8 0-4.422 3.578-8 8-8h783.952c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8z" fill=""/><path d="M791.984 528H232.008c-4.42 0-8-3.578-8-8s3.578-8 8-8h559.976c4.422 0 8 3.578 8 8s-3.578 8-8 8z" fill=""/></svg>
              <span className="font-semibold">Viajes / Salidas</span>
            </button>

            {/* Botón para abrir el modal de Encomiendas */}
            <button
              className="flex flex-col items-center text-white px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all w-48"
              onClick={openModal2}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="50px" height="50px" viewBox="0 0 100 100" data-name="Layer 1" id="Layer_1">
              <path d="M56,81.29a1.5,1.5,0,0,1-.45-2.93l16.46-5.15a1.5,1.5,0,0,1,.9,2.86L56.49,81.22A1.41,1.41,0,0,1,56,81.29Z"/>
              <path d="M56,74.29a1.5,1.5,0,0,1-.45-2.93l10.53-3.29A1.5,1.5,0,1,1,67,70.93L56.49,74.22A1.41,1.41,0,0,1,56,74.29Z"/><path d="M23.32,54.08h0Z"/><path d="M23.26,30.08A.94.94,0,0,0,23,30a.05.05,0,0,0,0,0h.06A1.37,1.37,0,0,1,23.26,30.08Z"/><path d="M37.74,35.48a1.41,1.41,0,0,0-.37.8,1,1,0,0,1,.05-.3,1.59,1.59,0,0,1,.22-.43Z"/><path d="M89.37,28a.51.51,0,0,0,0-.17.84.84,0,0,0,0-.17,1.11,1.11,0,0,0-.07-.16,1.24,1.24,0,0,0-.31-.42L88.77,27a1.22,1.22,0,0,0-.29-.17l-.08,0-26.06-11L50.87,10.94l-.09,0a1.29,1.29,0,0,0-.26-.08,1.38,1.38,0,0,0-.64,0,1.29,1.29,0,0,0-.26.08l-.06,0-38,15.8h0a1.3,1.3,0,0,0-.26.14h0a.66.66,0,0,0-.15.14.24.24,0,0,0-.1.1,1.43,1.43,0,0,0-.34.6,1.34,1.34,0,0,0-.06.4V76.87A1.49,1.49,0,0,0,11.7,78.3L49.16,90h0l1.42.17L70,84.11h0l18.27-5.72a1.48,1.48,0,0,0,1-1.43V28.19A1.09,1.09,0,0,0,89.37,28ZM48.54,86.67l-34.9-10.9V30.14l7.28,2.28V52.66a1.51,1.51,0,0,0,1,1.42l.23.08.12,0h0l.1,0a1.09,1.09,0,0,0,.26,0h.11a.18.18,0,0,0,.1,0,.4.4,0,0,0,.15,0l.23-.07,0,0h0a.6.6,0,0,0,.15-.09.61.61,0,0,0,.16-.12l.08-.07,6.82-6,7,10.92.09.15a1.51,1.51,0,0,0,1,.68h.44a.28.28,0,0,0,.13,0,.19.19,0,0,0,.1,0l.12,0a1,1,0,0,0,.23-.12l0,0a1.24,1.24,0,0,0,.22-.18L40,59a1.09,1.09,0,0,0,.13-.17.94.94,0,0,0,.14-.26,1.31,1.31,0,0,0,.09-.28,1.53,1.53,0,0,0,0-.3V38.5l8.18,2.55ZM38.37,35l-.1.07-.53.4a1.41,1.41,0,0,0-.37.8,1.09,1.09,0,0,0,0,.18V52.88l-5.2-8.14a.25.25,0,0,0,0-.08,1,1,0,0,0-.13-.18,1.8,1.8,0,0,0-.21-.19.79.79,0,0,0-.23-.14l-.14-.07a.64.64,0,0,0-.18-.06L31,44a1.27,1.27,0,0,0-.39,0l-.21,0a1.19,1.19,0,0,0-.35.15l-.2.14,0,0-.12.11-5.83,5.16V32.81a.92.92,0,0,0,.27-.08l16.57-6.89,9.42,4.26Zm11.8,3.41-6.94-2.18,11.3-4.7.24-.13a1.24,1.24,0,0,0,.22-.18,1.39,1.39,0,0,0,.33-.46s0,0,0,0a1.13,1.13,0,0,0,.08-.24.15.15,0,0,0,0-.07,1.09,1.09,0,0,0,0-.26,1.47,1.47,0,0,0-.07-.46s0-.09-.05-.13a2,2,0,0,0-.1-.21l-.13-.18a1.26,1.26,0,0,0-.2-.2l-.07,0a.87.87,0,0,0-.26-.16L41.51,22.89h-.07a1.43,1.43,0,0,0-1.23,0L23.06,30a1.37,1.37,0,0,1,.2.13A.94.94,0,0,0,23,30a.05.05,0,0,0,0,0,.31.31,0,0,0-.13-.06l-6.33-2,33.66-14,11,4.63L83.52,28ZM86.38,75.85,69.16,81.24,51.54,86.75V41.13l34.84-10.9Z"/><path d="M23.26,30.08A.94.94,0,0,0,23,30h0A1.37,1.37,0,0,1,23.26,30.08Z"/><path d="M37.74,35.48a1.41,1.41,0,0,0-.37.8,1.09,1.09,0,0,0,0,.18v.27a1.46,1.46,0,0,1,.28-1.18Z"/><path d="M23.31,54.08h0Z"/></svg>
              <span className="font-semibold">Encomiendas</span>
            </button>
          </div>
        </div>

        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#1c2c43] dark:bg-[#6e89af] text-white dark:text-white">
              <th className="px-4 py-2">Razon Social</th>
              <th className="px-4 py-2">NIT / CI</th>
              <th className="px-4 py-2">Numero</th>
              <th className="px-4 py-2">Monto</th>
              <th className="px-4 py-2">Monto Literal</th>
              <th className="px-4 py-2">Tipo</th>
              <th className="px-4 py-2">Tipo Servicio</th>
              <th className="px-4 py-2">Opciones Recibo</th>
              <th className="px-4 py-2">Opciones facturacion</th>
              <th className="px-4 py-2">Anular todo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">MARTIN CHOQUEHUANCA PEREZ</td>
              <td className="border px-4 py-2">6925272</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">1280</td>
              <td className="border px-4 py-2">	Mil doscientos ochenta 00/100 Bolivianos</td>
              <td className="border px-4 py-2">Factura</td>
              <td className="border px-4 py-2">encomienda</td>
              <td className="border px-4 py-2 ">
                <div className="flex space-x-2">
                  <button className="px-4-k py-4-k  text-white rounded-full metallic-button-movilidad">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                      <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                  </button>
                  <button className="px-4-k py-4-k  text-white rounded-full metallic-button-Licencia">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                      <path d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="flex space-x-2">
                  <button className="px-4-k py-4-k  text-white rounded-full metallic-button-movilidad">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                    <path d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                  </svg>

                  </button>
                  <button className="px-4-k py-4-k  text-white rounded-full metallic-button-Licencia">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                      <path d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                    </svg>
                  </button>
                  <button className="px-4-k py-4-k  text-white rounded-full metallic-button-trash">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 512 512" version="1.1">
                      <title>pdf-document</title>
                      <g id="Page-1" stroke="none" fill="none" fillRule="evenodd">
                          <g id="add" fill="#fff" transform="translate(85.333333, 42.666667)">
                              <path d="M75.9466667,285.653333 C63.8764997,278.292415 49.6246897,275.351565 35.6266667,277.333333 L1.42108547e-14,277.333333 L1.42108547e-14,405.333333 L28.3733333,405.333333 L28.3733333,356.48 L40.5333333,356.48 C53.1304778,357.774244 65.7885986,354.68506 76.3733333,347.733333 C85.3576891,340.027178 90.3112817,328.626053 89.8133333,316.8 C90.4784904,304.790173 85.3164923,293.195531 75.9466667,285.653333 L75.9466667,285.653333 Z M53.12,332.373333 C47.7608867,334.732281 41.8687051,335.616108 36.0533333,334.933333 L27.7333333,334.933333 L27.7333333,298.666667 L36.0533333,298.666667 C42.094796,298.02451 48.1897668,299.213772 53.5466667,302.08 C58.5355805,305.554646 61.3626692,311.370371 61.0133333,317.44 C61.6596233,323.558965 58.5400493,329.460862 53.12,332.373333 L53.12,332.373333 Z M150.826667,277.333333 L115.413333,277.333333 L115.413333,405.333333 L149.333333,405.333333 C166.620091,407.02483 184.027709,403.691457 199.466667,395.733333 C216.454713,383.072462 225.530463,362.408923 223.36,341.333333 C224.631644,323.277677 218.198313,305.527884 205.653333,292.48 C190.157107,280.265923 170.395302,274.806436 150.826667,277.333333 L150.826667,277.333333 Z M178.986667,376.32 C170.098963,381.315719 159.922142,383.54422 149.76,382.72 L144.213333,382.72 L144.213333,299.946667 L149.333333,299.946667 C167.253333,299.946667 174.293333,301.653333 181.333333,308.053333 C189.877212,316.948755 194.28973,329.025119 193.493333,341.333333 C194.590843,354.653818 189.18793,367.684372 178.986667,376.32 L178.986667,376.32 Z M254.506667,405.333333 L283.306667,405.333333 L283.306667,351.786667 L341.333333,351.786667 L341.333333,329.173333 L283.306667,329.173333 L283.306667,299.946667 L341.333333,299.946667 L341.333333,277.333333 L254.506667,277.333333 L254.506667,405.333333 L254.506667,405.333333 Z M234.666667,7.10542736e-15 L9.52127266e-13,7.10542736e-15 L9.52127266e-13,234.666667 L42.6666667,234.666667 L42.6666667,192 L42.6666667,169.6 L42.6666667,42.6666667 L216.96,42.6666667 L298.666667,124.373333 L298.666667,169.6 L298.666667,192 L298.666667,234.666667 L341.333333,234.666667 L341.333333,106.666667 L234.666667,7.10542736e-15 L234.666667,7.10542736e-15 Z" id="document-pdf">
                              </path>
                          </g>
                      </g>
                  </svg>
                  </button>
                </div>
              </td>
              <td className="border px-4 py-2">
                <button className="px-4-k py-4-k  text-white rounded-full metallic-button-trash">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SEGUROS Y REASEGUROS PERSONALES UNIVIDA S.A.</td>
              <td className="border px-4 py-2">301204024</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">150</td>
              <td className="border px-4 py-2">Ciento cincuenta 00/100 Bolivianos</td>
              <td className="border px-4 py-2">Recibo</td>
              <td className="border px-4 py-2">Pasajero</td>
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

      {/* Modal 1: Viajes / Salidas */}
      {isModalOpen1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1c2c43] dark:bg-[#18273d] text-white dark:text-white p-8 rounded-lg w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-lg font-semibold text-center mb-4" >Registro de Viajes / Salidas</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Columna 1: Nombre Completo y Fecha de Salida */}
              <div className="flex flex-col">
                <label className="block text-sm font-medium dark:text-gray-300">Buscar servicio</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Ingresa tu nombre"
                />
              </div>

              <div className="flex flex-col">
                <label className="block text-sm font-medium dark:text-gray-300">Nombre Del Servicio</label>
                <input
                  type="text"
                  name="departure_date"
                  className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Columna 2: Destino y Motivo */}
              <div className="flex flex-col">
                <label className="block text-sm font-medium dark:text-gray-300">Detalles Adicionales</label>
                <input
                  type="text"
                  name="destination"
                  className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Ingresa el destino"
                />
              </div>

              <div className="flex flex-col ">
                <label className="block text-sm font-medium dark:text-gray-300">Aranceles Del Servicio</label>

                <div className="flex gap-2">
                  {/* Input de Cantidad */}
                  <input
                    type="number"
                    name="cantidad"
                    className="w-1/3 p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Cantidad"
                    min="0"
                    onChange={(e) => {
                      const cantidad = parseFloat(e.target.value) || 0;
                      const precioUnitario = parseFloat(e.target.nextSibling.value) || 0;
                      e.target.parentElement.nextSibling.value = (cantidad * precioUnitario).toFixed(2);
                    }}
                  />

                  {/* Input de Precio Unitario */}
                  <input
                    type="number"
                    name="precio_unitario"
                    className="w-1/3 p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Precio Unitario"
                    min="0"
                    onChange={(e) => {
                      const precioUnitario = parseFloat(e.target.value) || 0;
                      const cantidad = parseFloat(e.target.previousSibling.value) || 0;
                      e.target.parentElement.nextSibling.value = (cantidad * precioUnitario).toFixed(2);
                    }}
                  />
                  {/* Input de Total (Solo lectura) */}
                  <input
                    type="text"
                    name="total"
                    className="w-full p-2 border rounded-lg mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Total"
                    readOnly
                  />
                </div>


              </div>

              <div className="col-span-2 flex justify-center gap-2 mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg dark:bg-blue-500">
                  Agregar a la lista
                </button>
              </div>
              <div className="flex flex-col">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium dark:text-gray-300">Buscar servicio</label>
                      <input
                        type="text"
                        name="name"
                        className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Ingresa tu nombre"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium dark:text-gray-300">CI / NIT</label>
                      <input
                        type="text"
                        name="departure_date"
                        className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    {/* Columna 2: Destino y Motivo */}
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium dark:text-gray-300">Razon Social</label>
                      <input
                        type="text"
                        name="destination"
                        className="w-full p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Ingresa el destino"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label className="block text-sm font-medium dark:text-gray-300">Datos De Envio De Factura</label>
                      <div className="flex gap-2">
                        {/* Input de Cantidad */}
                        <input
                          type="number"
                          name="cantidad"
                          className="w-1/2 p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="correo electronico"
                          min="0"
                          onChange={(e) => {
                            const cantidad = parseFloat(e.target.value) || 0;
                            const precioUnitario = parseFloat(e.target.nextSibling.value) || 0;
                            e.target.parentElement.nextSibling.value = (cantidad * precioUnitario).toFixed(2);
                          }}
                        />

                        {/* Input de Precio Unitario */}
                        <input
                          type="number"
                          name="precio_unitario"
                          className="w-1/2 p-2 border rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="telefono movil"
                          min="0"
                          onChange={(e) => {
                            const precioUnitario = parseFloat(e.target.value) || 0;
                            const cantidad = parseFloat(e.target.previousSibling.value) || 0;
                            e.target.parentElement.nextSibling.value = (cantidad * precioUnitario).toFixed(2);
                          }}
                        />
                      </div>
                </div>
              </div>
              <div className="flex flex-col">
              {isModalOpen1 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-[#1c2c43] dark:bg-[#18273d] text-white dark:text-white p-8 rounded-lg w-2/3">
                    <h2 className="text-2xl font-semibold mb-4 text-lg font-semibold text-center mb-4" >Registro de Viajes / Salidas</h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Columna 1: Nombre Completo y Fecha de Salida */}
                      <div className="flex flex-col">
                        <label className="block text-xs font-medium dark:text-gray-300">Buscar servicio</label>
                        <input
                          type="text"
                          name="name"
                          className="w-full p-1 text-sm border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="Ingresa tu nombre"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="block text-xs font-medium dark:text-gray-300">Nombre Del Servicio</label>
                        <input
                          type="text"
                          name="departure_date"
                          className="w-full p-1 text-sm border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="block text-xs font-medium dark:text-gray-300">Detalles Adicionales</label>
                        <input
                          type="text"
                          name="destination"
                          className="w-full p-1 text-sm border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="Ingresa el destino"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="block text-xs font-medium dark:text-gray-300">Aranceles Del Servicio</label>
                        <div className="flex gap-2">
                          {/* Input de Cantidad */}
                          <input
                            type="number"
                            name="cantidad"
                            className="w-24 p-1 text-sm border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Cant."
                            min="0"
                            onChange={(e) => {
                              const cantidad = parseFloat(e.target.value) || 0;
                              const precioUnitario = parseFloat(e.target.nextSibling.value) || 0;
                              e.target.parentElement.nextSibling.value = (cantidad * precioUnitario).toFixed(2);
                            }}
                          />

                          {/* Input de Precio Unitario */}
                          <input
                            type="number"
                            name="precio_unitario"
                            className="w-24 p-1 text-sm border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="P. Unit."
                            min="0"
                            onChange={(e) => {
                              const precioUnitario = parseFloat(e.target.value) || 0;
                              const cantidad = parseFloat(e.target.previousSibling.value) || 0;
                              e.target.parentElement.nextSibling.value = (cantidad * precioUnitario).toFixed(2);
                            }}
                          />

                          {/* Input de Total (Solo lectura) */}
                          <input
                            type="text"
                            name="total"
                            className="w-32 p-1 text-sm border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Total"
                            readOnly
                          />
                        </div>
                      </div>


                      <div className="col-span-2 flex justify-center gap-2 mt-4">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg dark:bg-blue-500">
                          Agregar a la lista
                        </button>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-col">
                          <label className="block text-xs font-medium dark:text-gray-300">Buscar servicio</label>
                          <input
                            type="text"
                            name="name"
                            className="w-full p-1 text-xs border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Ingresa tu nombre"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="block text-xs font-medium dark:text-gray-300">CI / NIT</label>
                          <input
                            type="text"
                            name="ci_nit"
                            className="w-full p-1 text-xs border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="block text-xs font-medium dark:text-gray-300">Razón Social</label>
                          <input
                            type="text"
                            name="razon_social"
                            className="w-full p-1 text-xs border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Ingresa la razón social"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="block text-xs font-medium dark:text-gray-300">Datos de Envío de Factura</label>
                          <div className="flex gap-2">
                            {/* Input de Correo Electrónico */}
                            <input
                              type="email"
                              name="email"
                              className="w-1/2 p-1 text-xs border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              placeholder="Correo electrónico"
                            />

                            {/* Input de Teléfono Móvil */}
                            <input
                              type="tel"
                              name="telefono_movil"
                              className="w-1/2 p-1 text-xs border rounded-md mt-0.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              placeholder="Teléfono móvil"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col">
                      <div className="flex flex-col p-4">
                        <div className="p-4 border rounded-lg shadow-md bg-white dark:bg-boxdark">
                          <h3 className="text-sm font-semibold text-center mb-4">Detalle</h3>
                          <div className="max-h-30 overflow-y-auto border p-2 rounded-lg dark:bg-gray-800">
                            <table className="w-full text-left border-collapse text-xs">
                              <thead className="bg-gray-200 dark:bg-gray-700">
                                <tr>
                                  <th className="p-1">Servicio</th>
                                  <th className="p-1">PU</th>
                                  <th className="p-1">Cantidad</th>
                                  <th className="p-1">Descuento</th>
                                  <th className="p-1">Total</th>
                                  <th className="p-1">Opciones</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
                                {Array.from({ length: 10 }).map((_, index) => (
                                  <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td className="p-1">Servicio {index + 1}</td>
                                    <td className="p-1">PU</td>
                                    <td className="p-1">Cantidad</td>
                                    <td className="p-1">Descuento</td>
                                    <td className="p-1">Total</td>
                                    <td className="p-1">
                                      <button className="px-1 py-0.5 bg-red-500 text-white rounded text-xs">Eliminar</button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <div className="grid grid-cols-2 gap-4 w-full mt-2 text-xs">
                            <table className="w-full bg-gray-200 dark:bg-gray-700">
                              <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <td className="p-1 w-1/2">Sub total</td>
                                  <td className="p-1 w-1/2 text-right">Monto</td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <td className="p-1 w-1/2">Monto Gift Card:</td>
                                  <td className="p-1 w-1/2 text-right">0</td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <td className="p-1 w-1/2">Descuento:</td>
                                  <td className="p-1 w-1/2 text-right">0</td>
                                </tr>
                              </tbody>
                            </table>

                            <table className="w-full bg-gray-200 dark:bg-gray-700">
                              <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <td className="p-1 w-1/2">Total Base Crédito Fiscal:</td>
                                  <td className="p-1 w-1/2 text-right">0</td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <td className="p-1 w-1/2">Crédito fiscal:</td>
                                  <td className="p-1 w-1/2 text-right">0</td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <td className="p-1 w-1/2">Método De Pago:</td>
                                  <td className="p-1 w-1/2 text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      </div>
                      {/* Botones */}
                      <div className="col-span-2 flex justify-end gap-2 mt-4">
                        <button
                          type="button"
                          onClick={closeModalVS}
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
                  </div>
                </div>

              )}
              </div>
              {/* Botones */}
              <div className="col-span-2 flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={closeModalVS}
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
          </div>
        </div>

      )}

      {/* Modal 2: Encomiendas */}
      {isModalOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-1/3">
            <h2 className="text-2xl font-semibold">Modal de Encomiendas</h2>
            <p>Contenido del modal de Encomiendas.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Service;
