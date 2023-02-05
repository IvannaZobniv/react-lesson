import React, {Component} from 'react';

class User extends Component {

    render() {
        const {id, name,username,email} = this.props.user;
        return(
            <div style={{padding:'10px'}}>
                <div style={{ fontWeight:'bold' }}> id: {id}</div>
                <div>name: {name}</div>
                <div>username: {username}</div>
                <div>email: {email}</div>
            </div>
        )
    }
}

export {User};