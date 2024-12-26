// src/index.js (or App.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Or wherever your main app component is
import { BasketProvider } from './context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider> {/* Wrap App with BasketProvider */}
      <App />
    </BasketProvider>
  </React.StrictMode>
);