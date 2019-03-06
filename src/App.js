import React, { Component } from 'react';
import {HashRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <HashRouter>
       <>
      <Route component ={Navbar} />
       </>
     </HashRouter>
    );
  }
}

export default App;
