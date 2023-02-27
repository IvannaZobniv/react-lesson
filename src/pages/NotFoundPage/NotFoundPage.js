import {NavLink} from "react-router-dom";

import css from './NotFoundPage.module.css'
const NotFoundPage = () => {
    return (
        <div className={css.NotFoundPage}>
            <div>NotFoundPage!!! 404</div>
            <div className={css.back}><NavLink to={''}>Back to the future</NavLink></div>
        </div>
    );
};

export {NotFoundPage};