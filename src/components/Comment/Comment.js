import React from "react";
import {NavLink} from "react-router-dom";

import css from './Comment.module.css';

const Comment = ({comment}) => {

    const {postId, id, name} = comment;

    return (
        <div id={id} className={css.Comment}>

            <NavLink to={postId.toString()}>
                <div style={{color:'#fd7436'}}>PostId: {postId}</div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
            </NavLink>

        </div>
    );
};

export {Comment};