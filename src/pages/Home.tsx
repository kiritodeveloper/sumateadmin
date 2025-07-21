// Home.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const sessionData = sessionStorage.getItem("sessionData");

      if (!sessionData) {
        navigate("/login"); // Redirige a login si no hay sesión
      }
    };

    checkAuth(); // Verifica la sesión al cargar el componente
  }, [navigate]);

  return (
    <>
      <h1>Home Page</h1>
      <p>Contenido de la página de inicio</p>
    </>
  );
};

export default Home;
