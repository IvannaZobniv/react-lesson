import React, {useEffect, useState} from 'react';


import {User} from "../User/User";
import {userService} from "../../services";
import {UserDetails} from "../UserDetails/UserDetails";
import {Posts} from "../Posts/Posts";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userDetailsId, setUserDetailsId] = useState(null);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]));
    }, []);


    return (
        <div>
            {!!userDetailsId && <UserDetails userDetailsId={userDetailsId} setUserDetailsId={setUserDetailsId} postId={postId} setPostId={setPostId}/>}
            <hr/>
            {!!users.length && users.map(user => <User key={user.id} user={user} setUserDetailsId={setUserDetailsId}/>)}
            <hr/>
            {!!postId && <Posts postId={postId}/>}

        </div>
    );
};

export {Users};