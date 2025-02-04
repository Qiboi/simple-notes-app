import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext';

import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <LocaleProvider>
                <App />
            </LocaleProvider>
        </ThemeProvider>
    </BrowserRouter>
);