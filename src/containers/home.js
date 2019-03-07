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
                q: this.state.searchInput,
                pageToken: ''
            }
        })
        .then(response => {
            this.setState({videos:response.data.items})
        })
    }
    render({
        console.log(this.state);

        const noResults = <div className="alert alert-secondary" role="alert">
        No Search Results yet!
        </div>;

        const results= <div className='row'>
        {
            this.state.videos.map((e, i)=>{
                return<VideoCard id ={e.id.videoId} image={e.snippet.thumbnails.medium.url}title={e.snippet.title}/>;
            })
            }
            </div>
            
            return(
                <div className='container'>
                 <div className="input-group mb-3 mt-5">
                 <input onChange={this.handleSearchText} type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" />
                 <div className="input-group-append">
                 <button onClick={this.handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>

                 </div>

                 </div>
                
            )
        }
        </div>

    })



                


            }
        })
    }
}