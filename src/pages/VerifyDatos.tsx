import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyDatos: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join("");

    if (code.length < 4) {
      setError("El código de verificación es obligatorio y debe tener 4 dígitos");
      return;
    }
    setError("");
    setLoading(true);

    const url = `${import.meta.env.VITE_API_URL}/verificarcodigo`;
    const apiKey = import.meta.env.VITE_APP_KEY;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          verification_code: code,
          key_system: apiKey,
        }),
      });

      const data = await response.json();

      if (response.ok && data.user?.estado === 'activo') {
        // Obtener los datos actuales del sessionStorage
        let sessionData = JSON.parse(sessionStorage.getItem('sessionData')) || {};

        // Actualizar el estado dentro del sessionData
        sessionData.status = 'activo';

        // Guardar los datos actualizados en sessionStorage
        sessionStorage.setItem('sessionData', JSON.stringify(sessionData));

        navigate("/home");
      } else {
        setError(data.message || "Error en la verificación del código");
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
      setError("Error codigo enviado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg text-indigo-300 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-white text-center mb-4">Verfica El Codigo Unico</h2>
        <p className="text-sm text-center mb-6">Introduce el código de 4 dígitos que te hemos enviado a tu correo electrónico</p>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-4">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl font-base bg-[#333A5c] text-white border border-b-blue-300 rounded-sm outline-none"
                maxLength={1}
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-900 text-white font-medium tracking-wide"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>
        <p className="mt-5 text-center text-sm">
          <a href="/login" className="text-slate-400 hover:underline">Regresar Al Inicio De Sesion</a>
        </p>
      </div>
    </div>
  );
};

export default VerifyDatos;
