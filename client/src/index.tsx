import React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'redux';

import { Provider } from 'react-redux';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {store} from "./utils/Types/store";
import App from "./Pages/App/App";

// const firebaseConfig = {
//     //...
// };
//
// const app = initializeApp(firebaseConfig);

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);