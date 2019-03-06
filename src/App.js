import React, { Component } from 'react';
import {HashRouter, Route } from 'react-router-dom';

//ONCE ROUTE PATH ARE DONE IMPORT THOSE ROUTES
import Navbar from './components/navbar';



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
