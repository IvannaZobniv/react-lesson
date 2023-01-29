import React from "react";

import css from './Todo.module.css';

const Todo = ({todo}) => {

    const {id, title, userId, completed} = todo;

    return (
        <div className={css.Todo}>
            <div style={{color:'#fc7436'}}>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed.toString()} </div>
        </div>
    );
};

export {Todo};