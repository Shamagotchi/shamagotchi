import React from 'react';
import Main from './components/Main';
import {HashRouter, Routes, Route, Router}  from "react-router-dom";
import './style/normalize.css'
import './style/reset.css'
import NotFound from './components/NotFound';


const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route exact path="/:Id" element={<Main/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </HashRouter>
  );
};

export default App;