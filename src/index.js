import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from '/src/components/app/app';
import './index.css';
import '/src/fonts/inter-v13-cyrillic_latin-regular.woff2';
import '/src/fonts/inter-v13-cyrillic_latin-700.woff2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
