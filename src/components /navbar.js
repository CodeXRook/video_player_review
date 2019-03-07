import React from 'react';
import {Link} from 'react-router-dom';

// LINK IS SET TO HOME AND YOU HAS A LINK ON ALL PAGES FROM NAVBAR CLASS
const Navbar =(props) => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-danger">
    <Link className ="navbar-brand" to='/'>YouTube</Link> 
    <div className= "collapse navbar-collapse" id="navbarNavAltMarkup">
    
    </div>
    </nav>
}