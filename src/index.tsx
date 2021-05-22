import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import { ModalContextProvider } from './context/ModalContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ModalContextProvider>
        <App />

      </ModalContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
