import './index.css'

import React from 'react'
import App from './App'
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client'; // createRoot(container!) if you use TypeScript
const root = createRoot(document.getElementById('root'));
// const container = document.getElementById('app');
// const root = createRoot(container);

root.render(<App />)
