import React,{axios, Component} from 'react';
import Main from './components/Main';
import {HashRouter, Routes, Route, Router}  from "react-router-dom";
import './style/normalize.css'
import './style/reset.css'
import NotFound from './components/NotFound';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hello : [],
    }
  }
  componentDidMount() {
    this._getHello();
  }

  _getHello = async() => {
    const res = await axios.get('/hello');
    this.setState({ hello : res.data.hello })
    console.log(this.state.hello);
  }

  render() {
    return (
      <HashRouter>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route exact path="/:Id" element={<Main/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>

          </Routes>
      </HashRouter>
    )
  }
};

export default App;