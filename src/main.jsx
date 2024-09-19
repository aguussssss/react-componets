import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store/store.js';
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FacebookProvider } from "@kazion/react-facebook-login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
          <GoogleOAuthProvider clientId="802553031918-9hejgedacvdnsk7s2ts8m2u1a4g45822.apps.googleusercontent.com">
            <FacebookProvider appId="537321392226837" version="v19.0">
              <App />
            </FacebookProvider>
          </GoogleOAuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);