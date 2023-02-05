import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id, name,username,email} = this.props.user;
        return(
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>username: {username}</div>
                <div>email: {email}</div>
            </div>
        )
    }
}

export {User};