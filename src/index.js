import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './modules/app/App';
import "./scss/style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
