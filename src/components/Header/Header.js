import {Link } from "react-router-dom";

import {SearchBar} from "../SearchBar/SearchBar";
import css from './Header.module.css';
const Header = () => {
    const logo = 'MOVIES';

    return (
        <div className={css.Header}>
            <Link to='/' className={css['Header-link']}>{logo}</Link>

            <div>
                <SearchBar />
            </div>
        </div>
    );
};

export { Header };