import {Route, Routes, useNavigate} from "react-router-dom";
import {CarPage, UsersPage} from "./components";

const App = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <button onClick={() => navigate('/users')}>users</button>
                <button onClick={() => navigate('/cars')}>cars</button>
            </div>
            <hr/>
            <Routes>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/cars'} element={<CarPage/>}/>
            </Routes>
        </div>
    );
};

export {App};
