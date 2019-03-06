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
        this.setState({ comment: e.target.value })
    }
    handleClick = (e) =>{
        e.preventDefault();
    }



}