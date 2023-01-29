import React from 'react';
import { useForm } from "react-hook-form";

import {commentRequests} from "../../api/requests";

const CommentsForm = ({setComments}) => {
    const { register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
    })

    const submit = async (data) => {
        await commentRequests.addComment(data).then(({data}) => setComments((prevState) => [...prevState, data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="comment" {...register('name')}/>
            <button>Create </button>
        </form>
    );
};
export{CommentsForm};