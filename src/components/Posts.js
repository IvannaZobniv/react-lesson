import React, {Component} from 'react';
import {userService} from "../services";
import {User} from "./User";
import {Post} from "./Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state ={post:[]}
    }

    componentDidMount() {
        userService.getAll().then(({data})=>this.setState({posts:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {Posts};