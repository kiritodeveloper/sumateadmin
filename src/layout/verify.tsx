// DefaultLayout.tsx
import React, { useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';

const Verificar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
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

export default Verificar;
