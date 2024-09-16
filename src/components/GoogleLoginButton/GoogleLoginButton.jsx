import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function GoogleLoginButton() {
  const [userProfile, setUserProfile] = useState({ name: '', email: '' });

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUserProfile({
      name: decoded.name,
      email: decoded.email,
    });
  };

  const handleFailure = () => {
    console.log('Google Login failed');
  };

  return (
    <GoogleOAuthProvider clientId="802553031918-9hejgedacvdnsk7s2ts8m2u1a4g45822.apps.googleusercontent.com">
      <div>
        <h2>Iniciar sesión con Google</h2>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleFailure}
        />
        {userProfile.name && (
          <div>
            <h3>Perfil del usuario</h3>
            <p>Nombre: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;