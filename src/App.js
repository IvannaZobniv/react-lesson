import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, PostsPage, UsersPage} from "./pages";

const App = () => {
  return (
      <div>
          <Routes>
              <Route path={'/'} element={<HomePage/>}/>
              <Route path={'users'} element={<UsersPage/>}/>
              <Route path={'posts'} element={<PostsPage/>}/>
              <Route path={'about'} element={<AboutPage/>}/>

        </Routes>
      </div>
  );
};

export {App} ;
