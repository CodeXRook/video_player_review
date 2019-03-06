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
        const {name, comment, commentsList } = this.state;
        commentsList.unshift({ name: name, comment: comment });
        this.setState({ name: '', comment: '', commentsList });    
    }

    render() {
        console.log(this.state);
    
        return(
            <>
             <VideoPlayer id={this.props.match.params.id} />
             <form>
             <div class="form-group">
             <label for="exampleInputEmail1">Name</label>
             <input onChange={this.handleNameChange} value={this.state.name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name..." />
             </div>
             <div class="form-group">
             <label for="exampleInputPassword1">Comment</label>





}