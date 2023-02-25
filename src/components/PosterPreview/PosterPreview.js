import {useEffect, useState} from "react";

import {moviesService} from "../../services";
import css from './PosterPreview.module.css';

const PosterPreview = ({movieId}) => {
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        moviesService.getById(movieId).then(({data}) => setMovie(data))
    }, [movieId])

    return (
        <div className={css['poster-container']}>
            {movie &&
                <img className={css['poster-image']} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title + '_poster'}/>
            }
        </div>
    );
};

export {PosterPreview};
