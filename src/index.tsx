import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './services/Pages/App/App';
import { initializeApp } from 'firebase/app';
import {BrowserRouter} from "react-router-dom";

const firebaseConfig = {
    //...
};

const app = initializeApp(firebaseConfig);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

