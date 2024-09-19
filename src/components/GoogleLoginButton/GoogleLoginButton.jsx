import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function GoogleLoginButton() {
  const [userProfile, setUserProfile] = useState({ name: '', email: '' });

  const googleLoginStyle = {
    textAling: 'center',
  }
  
  const iconStyle = {
    paddingRight : '10px',
  }

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUserProfile({
      name: decoded.name,
      email: decoded.email,
    });
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  const handleFailure = () => {
    console.log('Google Login failed');
  };

  return (
    <button onClick={() => login()} style={googleLoginStyle}>
      <img src='src\components\GoogleLoginButton\google.png' width='35px' height='30px' style={iconStyle}/>
      Acceder con Google
    </button>
  );
}

export default GoogleLoginButton;