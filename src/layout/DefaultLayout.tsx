// DefaultLayout.tsx
import React, { useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const sessionData = sessionStorage.getItem("sessionData");

      const verifi=JSON.parse(sessionData);
      // Si no hay datos en sessionStorage el status es inactivo, redirige al verify
      if (verifi?.status ==='inactivo') {
        navigate("/verifydatos");
        return;
      }
      // Si no hay datos en sessionStorage, redirige al login
      if (!sessionData) {
        navigate("/login");
        return;
      }

      const { token, expires_at } = JSON.parse(sessionData);

      // Verifica si el token existe y si la sesión no ha expirado
      if (!token || !expires_at) {
        navigate("/login");
        return;
      }

      const currentTime = new Date().getTime();
      const expirationTime = new Date(expires_at).getTime();

      // Si la sesión ha expirado, redirige al login
      if (currentTime > expirationTime) {
        sessionStorage.removeItem("sessionData");
        navigate("/login");
      }
    };

    checkAuth(); // Llama a la función para verificar la sesión
  }, [navigate]);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children} {/* Renderiza el contenido de la página aquí */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
