import React from 'react';

const Users = ({users}) => {
    return (
        <div>
            <h1>User</h1>
            {users.map(item => {
                const {id, username} = item;
                return (
                    <div key={id}>
                        {id} --- {username}
                    </div>
                )
            })}
        </div>
    );
};
export{Users};