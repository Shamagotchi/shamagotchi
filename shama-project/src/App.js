import React,{axios, Component, useEffect, useState} from 'react';
import Main from './components/Main';
import {HashRouter, Routes, Route, Router}  from "react-router-dom";
import './style/normalize.css'
import './style/reset.css'
import NotFound from './components/NotFound';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {apiResponse : ""}
  // }
  // callAPI() {
  //   fetch("http://localhost:3001/dashboard")
  //     .then(res => res.text())
  //     .then(res => this.setState({apiResponse : res}))
  //     .catch(err => err)
  // }
  // componentDidMount() {
  //   this.callAPI()
  // }
  render(){
    return (
      <>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Main/>}></Route>
              <Route path="/:Id" element={<Main/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
              <Route exact path="/login" element={<Main/>}></Route>
              <Route exact path="/logout" element={<Main/>}></Route>
            </Routes>
        </HashRouter>
      </>
    );
  }
}
// const App = () => {
  

  
// };

export default App;