import React from 'react';
import FacebookLogin from '@kazion/react-facebook-login';
import { FacebookProvider, useFacebookLogin } from '@kazion/react-facebook-login';

function FacebookLoginButton() {
  const responseFacebook = (response) => {
    console.log(response);
    if (response.status !== 'unknown') {
      console.log('User Name:', response.name);
      console.log('User Email:', response.email);
    } else {
      console.log('Login failed');
    }
  };

  const login = useFacebookLogin({
    onSuccess: (response) => {
      console.log(response);
    },
  });

  return (
    <button onClick={() => login()}>
      <img src='src\components\FacebookLoginButton\facebook.png' width='20px' height='20px'/>
      Acceder con Facebook
    </button>
  );
};

export default FacebookLoginButton;