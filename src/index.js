import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/outfit/100.css'; 
import '@fontsource/outfit/300.css'; 
import '@fontsource/outfit/400.css'; 
import '@fontsource/outfit/500.css'; 
import '@fontsource/outfit/700.css';
import '@fontsource/outfit/900.css'; 

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
