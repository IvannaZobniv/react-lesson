import {useState} from "react";

const Count = () => {
    const [b,setB]= useState(0);
    console.log('Count');

    // const int =()=>{
    //     setB( prevState => prevState+1 )
    // }
    return (
        <div>
            <div>B:{b}</div>
            <button onClick={()=>setB( prevState => prevState+1 )}>Inc</button>
        </div>
    );
};

export {Count};

