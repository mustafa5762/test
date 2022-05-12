import { Paper, Typography , Button, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from './Sidebar'
import axios from 'axios'

function ManageVideos() {

    const [videos, setvideos] = useState(null);

    const fetchVideos = async () => {
        const ress = await axios.get('https://videos-backends.herokuapp.com/videos');
        setvideos(ress.data);
    };

    useEffect(() => {
      fetchVideos();
    }, []);

    const deleteVideo = async (id) => {
        await axios.get('https://videos-backends.herokuapp.com/vd/' + id);
        setvideos(videos.filter(item => item._id !== id));
    };


  return (
    <div>
        <ResponsiveDrawer>
        {
                videos &&
                <Paper elevation={3} style={{padding:20}}>
                    {videos.map(video =>
                        <div key={video._id} style={{display:'flex',alignItems:'center',padding:8}}>
                            <Typography component="p" variant="h7">
                                {video.title}
                            </Typography>
                            <Typography color="text.secondary" style={{ flex: 1 , display: 'flex' , justifyContent:'center' }}>
                                {video.category}
                            </Typography>
                            <div>
                                <Button variant="contained" onClick={() => deleteVideo(video._id)}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    )}
                </Paper>
            }
        </ResponsiveDrawer>
    </div>
  )
}

export default ManageVideos