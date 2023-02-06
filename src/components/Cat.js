import css from "./Cat.module.css";

const Cat = ({cat,dispatch}) => {
    const {id, name} = cat;

    return (
        <div>
            {id}) {name}
            <button  className={css.Cat} onClick={()=>dispatch({type:'DELETE_CAT', payload:id})}>delete</button>
        </div>
    );
};

export {Cat};
