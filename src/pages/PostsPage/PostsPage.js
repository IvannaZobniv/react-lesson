import React from 'react';
import {Posts} from "../../components";
import {Outlet} from "react-router-dom";
import css from './PostsPage.module.css'

const PostsPage = () => {
    return (
        <div className={css.PostsPage}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};