import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from '/src/components/app/app';

window.assetsPath = `${ process.env.PUBLIC_URL }/assets/`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
