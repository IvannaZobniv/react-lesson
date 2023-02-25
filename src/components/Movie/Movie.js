import css from './Movie.module.css';

const Movie = ({movie}) => {
    const {original_title, genre_ids}= movie;

    return (
        <div className={css.Movie}>
            <div className={css.Title}>{original_title}</div>
            <div className={css.GenreIds}>Genres: {genre_ids.join(', ')}</div>
        </div>
    );
};

export {Movie};
