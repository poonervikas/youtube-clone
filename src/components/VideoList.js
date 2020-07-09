import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoList = ({videos , handleClick}) => {
    const listofVideos=videos.map((video,id)=>
        <VideoItem style={{height:"25%", width:"100%",marginTop:"5px"}} handleClick={handleClick} key={id} video={video} />
   )
   return (
       <Grid container spacing={2}  > 
       {listofVideos} 
       </Grid>
       
       )
}

export default VideoList
