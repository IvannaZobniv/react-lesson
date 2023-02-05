import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";

import {App} from './App';
import {StateProvider} from "./hoc/StateProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StateProvider>
);


