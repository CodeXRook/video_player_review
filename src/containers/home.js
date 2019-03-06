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
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params:{
                part: 'snippet',
                maxResults: 8,
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: 'AIzaSyBqsTC2uJ5zklkPcEDeLpAz4B6UktMYuPo',

                


            }
        })
    }
}