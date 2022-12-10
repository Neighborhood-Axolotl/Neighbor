import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// Rendering App comonponent with <BrowserRouter> and React 18 syntax
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
