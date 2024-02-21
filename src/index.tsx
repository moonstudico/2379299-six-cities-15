import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const placeCount = 132;


root.render(
  <React.StrictMode>
    <App
      placeCount = {placeCount}
    />
  </React.StrictMode>
);
