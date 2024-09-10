import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones simples
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }

    // Lógica de autenticación
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    
    // Restablecer campos
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <h2 className="login-label">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Correo Electrónico */}
        <label className="credentials-label" htmlFor="email">Correo Electrónico:</label>
        <input
          className="credentials-input"
          placeholder="Correo electronico"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Contraseña */}
        <label className="credentials-label" htmlFor="password">Contraseña:</label>
        <input
          className="credentials-input"
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Mensaje de Error */}
        {error && <p className="error">{error}</p>}

        {/* Botón de Enviar */}
        <button className="accept-button" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;