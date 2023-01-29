import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from './CommentsPost.module.css';
import {postsRequest} from "../../api";

const CommentsPost = () => {

    const {postId} = useParams();

    const [commentPost, setCommentPost] = useState(null);

    useEffect(() => {
        postsRequest.getById(postId).then(({data}) => setCommentPost(data))
    }, [postId]);

    if (commentPost) {

        const {userId, id, title, body} = commentPost;

        return (
            <div className={css.PostComment}>
                <div>UserId: {userId}</div>
                <div>Id: {id}</div>
                <h4>Title: {title}</h4>
                <div>Body: {body}</div>
            </div>
        );
    }
};

export {CommentsPost};