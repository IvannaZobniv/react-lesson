import React, {Component} from 'react';

class Post extends Component {

    render() {
        const {id, userId,title,body} = this.props.post;
        return(
            <div style={{padding: '10px'}}>
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div style={{ fontWeight:'bold' }} >title: {title}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {Post};