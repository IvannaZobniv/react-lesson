import React, {useEffect, useState} from 'react';

const FunctionComponent = ({name}) => {
    // першим відпрацьовує constructor
    console.log('constructor');
    const [state, setState] = useState({a:0, b:25});

    useEffect(()=>{
        // третім відпрацьовує componentDidMount - тут ним буде виступати useEffect
        console.log('componentDidMount');

        return ()=>{
            // п'ятим відпрацьовує componentWillUnmount, в useEffect можемо повертати
            // callback і ним якраз буде, наш componentWillUnmount
            console.log('componentWillUnmount');
        }
    },[])

    useEffect(()=>{
        // четвертим відпрацьовує componentDidUpdate
        console.log('componentDidUpdate');
    },[state])

    const inc = () => {
        setState(prevState =>({a:prevState.a+1, b:prevState.b-1}))
    }

    return (
        // другим відпрацьовує render
        <div>
            {console.log('render')}

            <div>
                <div>A:{state.a}</div>
                <div>B:{state.b}</div>
                <div>NameFromProps: {name}</div>
                <button onClick={() => inc()}>inc</button>
            </div>
        </div>
    );
};

export {FunctionComponent};