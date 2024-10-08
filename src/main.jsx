import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { HashRouter } from 'react-router-dom';
import './styles/App.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);

