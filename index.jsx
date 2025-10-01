import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';

// Note that we are importing app.jsx. Then we say we are rendering a function created in app.jsx.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);