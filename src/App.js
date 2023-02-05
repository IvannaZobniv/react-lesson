import React from 'react';
import {Posts, Users} from "./components";
import './App.css';
const App = () => {
  return (
      <div className="App">
          <Users/>
          <div className="line"/>
          <Posts/>
      </div>
  );
};
export {App} ;
