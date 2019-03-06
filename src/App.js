import React, { Component } from 'react';
import {HashRouter, Route } from 'react-router-dom';

//ONCE ROUTE PATH ARE DONE IMPORT THOSE ROUTES
import Navbar from './components/navbar';
import Home from './containers/home';
import Video from './containers/video';



class App extends Component {
  render() {
    return (
     <HashRouter>
       <>
      <Route component ={Navbar} />
      <Route path='/' exact component={Home} />
      <Route path= '/video/id' component={Video} />
       </>
     </HashRouter>
    );
  }
}

export default App;
