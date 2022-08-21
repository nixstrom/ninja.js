import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

const userData = JSON.parse(document.getElementById('user-data').dataset.users);
const rootEl = document.getElementById('root');
const root = createRoot(rootEl);
root.render(<App rows={userData} />);

