import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import youtube from './api/youtube'
import {SearchBar, VideoDetail,VideoList  } from './components/index'
import key from './components/key'
class  App  extends React.Component {
state={
  videos:[],
  selectedVideo:null
}


 handleSubmit = async (searchTerm)=>{
  console.log("in handle submit " + searchTerm)
  const response= await youtube.get('/search',{
    params: {
      q : searchTerm,
      part : 'snippet',
      maxResults : 5,
      key:key
  }
  })
  console.log(response.data.items);
  this.setState({
    videos: response.data.items,
    selectedVideo : response.data.items[0]
  })
}
handleOnClick=(video)=>{
  this.setState({
    selectedVideo: video
  })
}


render(){
  const {selectedVideo,videos}=this.state
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item xs={11}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>
          <Grid item xs={9}>
          <VideoDetail video={selectedVideo}  />
          </Grid>
          <Grid item xs={3} >
        <VideoList videos={videos} handleClick={this.handleOnClick}/>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
}

export default App;
