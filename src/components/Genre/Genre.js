import css from './Genre.module.css'

const Genre = ({genre}) => {

    const {name} = genre;

    return (
        <div className={css.GenreContainer}>
            <div className={css.Genre}>
                <button className={css.butt}><b>{name}</b></button>
            </div>
        </div>
    );
};

export {Genre};
