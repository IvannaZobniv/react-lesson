import React from 'react';

import {Cats, Dogs} from "./components";
import css from './App.module.css';

const App = () => {
  return (
      <div className={css.App}>
          <div>
              <input type="text"/>
              <button>createCat</button>
              <Cats/>
          </div>
          <div>
              <input type="text"/>
              <button> createDog </button>
              <Dogs/>
          </div>
      </div>

  );
};

export {App} ;
