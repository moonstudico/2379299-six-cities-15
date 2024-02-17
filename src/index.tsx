import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const setting = {
  placeCount:132,
} as const;

root.render(
  <React.StrictMode>
    <App
      placeCount = {setting.placeCount}
    />
  </React.StrictMode>
);
