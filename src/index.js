import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from '/src/components/app/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '/src/thems/default';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
