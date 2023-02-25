// import { useEffect, useState } from 'react';
// import {moviesBaseURL} from "../../configs";
//
//
// const GenreMovies = ({ genreId }) => {
//     const [movies, setMovies] = useState([]);
//
//     useEffect(() => {
//         // Отримуємо фільми з жанру
//         const fetchMovies = async () => {
//             const response = await fetch(`${moviesBaseURL}/discover/movie?api_key=6ed4c22f763402a040483d19d519a14b&with_genres=${genreId}`);
//             const data = await response.json();
//             setMovies(data.results);
//         };
//
//         fetchMovies();
//     }, [genreId]);
//
//     return (
//         <div>
//             <h2>{genreId}</h2>
//             <ul>
//                 {movies.map((movie) => (
//                     <li key={movie.id}>{movie.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export { GenreMovies };