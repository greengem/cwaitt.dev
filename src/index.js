import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
/*import 'bootswatch/dist/cosmo/bootstrap.min.css';*/
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
