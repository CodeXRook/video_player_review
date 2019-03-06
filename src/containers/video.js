import React from 'react';

class Video extends React.Component {

    state={
        name:'',
        comment:'',
        commentsList:[]
    }

    handleNameChange = (e) =>{
        this.setState({ name: e.target.value })
    }

    handleCommentChange = (e) =>{
        
    }

}