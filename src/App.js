import React, { Component } from 'react';
import {HashRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <HashRouter>
       <>
      <Route component ={Navbar} />
      <Route path='/' exact component={Home} />
       </>
     </HashRouter>
    );
  }
}

export default App;
