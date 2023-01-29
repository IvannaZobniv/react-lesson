import { useEffect, useState } from "react";

import {CommentsForm, Comments, UsersForm, Users} from './components';
import {commentRequests, usersRequests} from './api/requests';

const App = () => {
    const styles = {textAlign: "center"}
    // для створення нового юзера
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersRequests.getAll().then(({data}) => setUsers([...data]))
    }, [])

    // для створення нового комента

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentRequests.getAll().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div style={styles}>
            <div style={{background:'Chartreuse'}}>
                <UsersForm setUsers={setUsers}/>
                <hr/>
                <Users users={users}/>
            </div>
            <div style={{background:'Coral'}}>
                <CommentsForm setComments={setComments} />
                <hr/>
                <Comments comments={comments} />
            </div>
        </div>
    );
}

export {App};