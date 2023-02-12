import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupStore} from "./redux";

import './index.css';
import {App} from './App';
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore();
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);


