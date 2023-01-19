const RickMorty = ({rickMorty}) => {
    const {id, name,status,species,gender,image } = rickMorty;
    return (
        <div>
            <div>id:{id} </div>
            <div>name:{name}</div>
            <div>status:{status}</div>
            <div>species:{species}</div>
            <div>gender:{gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {RickMorty};