import {Navigate, Route, Routes} from "react-router-dom";

import {SearchResults} from "./components";
import {DetailMoviePage} from "./pages/DetailMoviePage/DetailMoviePage";
import {MoviesPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'detail-movie/:id'} element={<DetailMoviePage/>}/>
                <Route path={'search-results'} element={<SearchResults/>}/>
            </Route>
        </Routes>
    );
};

export {App};
