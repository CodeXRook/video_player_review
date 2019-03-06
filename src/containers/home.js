import React from 'react';
import axios from axios;

class Home extends React.Component {
    state ={
        video:[],
        searchInput:''
    }
    
    handleSearchText = (e) => {
    this.setState({ searchInput: e.target.value });
    }
    handleSubmit = (e) => {
        console.log('Button was clicked');
    }
}