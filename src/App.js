import React, {useState} from 'react';
import {ClassComponent} from "./components/ClassComponent";
import {FunctionComponent} from "./components/FunctionComponent";

const App = () => {
    const [flag, setFlag] = useState(true);
  return (
      <div>
          {/*<ClassComponent name={'max'}/>*/}

          {/*{flag && <ClassComponent name={'max'}/>}*/}
          <button onClick={()=>setFlag(prev=>!prev)}>Hide</button>

          {flag && <FunctionComponent name={'max'}/>}
      </div>
  );
};

export {App} ;
