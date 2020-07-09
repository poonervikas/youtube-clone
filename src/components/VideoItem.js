import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';


const VideoItem = ({ video, handleClick }) => {
    return (
        <React.Fragment>
            <Grid onClick={() => handleClick(video)} >
                <Grid item xs={12} >
                    <Paper style={{ display: "flex", alignitems: "center", cursor: "pointer" }} >
                        <img  alt="Thumbnail" src={video.snippet.thumbnails.medium.url} />
                    </Paper>
                </Grid>
                <Grid item xs={12} >

                    <Typography variant="subtitle1"><b>{video.snippet.title.slice(0,30)}</b ></Typography>

                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default VideoItem
