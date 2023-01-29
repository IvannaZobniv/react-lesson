import React from "react";
import {Outlet, useNavigate} from "react-router-dom";

import css from './MainLayout.module.css';
import {Header} from "../../components";

const MainLayout = () => {

    const navigate = useNavigate();

    return (
        <div className={css.MainLayout}>
            <Header/>
            <div className={css.nav}>
                <button onClick={() => navigate(-1)} style={{ background:'#4cb0b7'}}>back</button>
                <button onClick={() => navigate(1)} style={{ background:'#6a97f4'}}>next</button>
            </div>
            <Outlet/>

        </div>
    );
};

export {MainLayout};