import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userThree from '../images/user/system.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Verificar si hay un token válido al cargar la página
  useEffect(() => {
    const sessionData = sessionStorage.getItem("sessionData");
    if (sessionData) {
      const { token, expires_at } = JSON.parse(sessionData);

      // Verificar si el token aún es válido
      if (new Date().getTime() < expires_at) {
        navigate("/home"); // Redirigir si ya hay sesión válida
      } else {
        sessionStorage.removeItem("sessionData"); // Limpiar sesión expirada
      }
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    setLoading(true);

    const url = `${import.meta.env.VITE_API_URL}/ingresarsofware`;
    const apiKey = import.meta.env.VITE_APP_KEY;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          key_system: apiKey,
        }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        // Guardar token y fecha de expiración en sessionStorage
        const expirationTime = new Date().getTime() + 3600000; // 1 hora en milisegundos

        // Verificar si el usuario está inactivo
        if (data.status === 'inactivo') {
          sessionStorage.setItem("sessionData", JSON.stringify({
            name: data.name,
            mail: data.email,
            token: data.token,
            expires_at: expirationTime,
            status: data.status,
          }));
          navigate("/verifydatos"); // Redirigir a verificar código
          return; // Detener la ejecución posterior
        }

        // Guardar datos en sessionStorage
        sessionStorage.setItem("sessionData", JSON.stringify({
          name: data.name,
          mail: data.email,
          token: data.token,
          expires_at: expirationTime,
          status: data.status,
        }));

        // Redirigir a la página principal
        navigate("/home");
      } else {
        setError(data.message || "Error en el inicio de sesión");
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
      setError("Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6" style={{ color: "#597690" }}>Iniciar Sesión Sistema</h2>
        <div className="flex justify-center mb-4">
          <img src={userThree} alt="Login" className="w-24 h-24" />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1" style={{ color: "#597690" }}>Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="correo@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1" style={{ color: "#597690" }}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="***********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#597690] text-white p-2 rounded-lg hover:bg-[#597690] transition"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Ingresar al Sistema"}
          </button>


        </form>
        <br />
        <button
          className="w-full bg-[#597690] text-white p-2 rounded-lg hover:bg-[#597690] transition" style={{ width: "100%" }}
          disabled={loading}
        >
          {loading ? "Cargando..." : "Recuperar mi Contraseña"}
        </button>
      </div>
    </div>
  );
};

export default Login;
