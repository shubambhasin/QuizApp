import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import { ModalContextProvider } from './context/ModalContext';
import { HashRouter } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ModalContextProvider>
        <QuizProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </QuizProvider>
      </ModalContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
