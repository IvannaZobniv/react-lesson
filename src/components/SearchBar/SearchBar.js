import { useState } from "react";

import { moviesService } from "../../services";
import css from "../MoviesList/MovieList.module.css";
import { MoviesListCard } from "../MoviesListCard/MoviesListCard";

const SearchBar = () => {
    const [searchKey, setSearchKey] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (event) => {
        event.preventDefault();
        try {
            const { data } = await moviesService.searchMovie(searchKey);
            const movies = data.results.filter((movie) =>
                movie.title.toLowerCase().includes(searchKey.toLowerCase())
            );
            setMovies(movies);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={searchMovies} >
                <input
                    type="text"
                    placeholder="Search movie"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div className={css.MovieList}>
                {movies.map((movie) => (
                    <MoviesListCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export { SearchBar };

