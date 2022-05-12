import { Paper, Typography , Button, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from './Sidebar'
import axios from 'axios'

function Home() {

    const [videos, setvideos] = useState(null);
    const [screenplays, setscreenplays] = useState(null);
    const [users, setusers] = useState(null);

    const fetchVideos = async () => {
        const ress = await axios.get('https://videos-backends.herokuapp.com/videos');
        setvideos(ress.data);
    };

    const fetchUsers = async () => {
        const ress = await axios.get('https://videos-backends.herokuapp.com/usersna');
        setusers(ress.data);
    };

    const fetchplays = async () => {
        const ress = await axios.get('https://videos-backends.herokuapp.com/screenplays');
        setscreenplays(ress.data);
    };

    useEffect(() => {
      fetchVideos();
      fetchplays();
      fetchUsers();
    }, []);

    const deleteVideo = async (id) => {
        await axios.get('https://videos-backends.herokuapp.com/vd/' + id);
        setvideos(videos.filter(item => item._id !== id));
    };

    const deletePlay = async (id) => {
        await axios.get('https://videos-backends.herokuapp.com/sd/' + id);
        setscreenplays(screenplays.filter(item => item._id !== id));
    };

    const deleteUser = async (id) => {
        await axios.get('https://videos-backends.herokuapp.com/ud/' + id);
        setusers(users.filter(item => item._id !== id));
    };

    const approveUser = async (id) => {
        await axios.get('https://videos-backends.herokuapp.com/usersu/' + id);
        setusers(users.filter(item => item._id !== id));
    };
    

  return (
    <div>
        <ResponsiveDrawer>
            {
                users && 
                <Paper elevation={3} style={{padding:20}}>
                    {users.map(user =>
                        <div key={user._id} style={{display:'flex',alignItems:'center',padding:8}}>
                            <Typography component="p" variant="h7">
                                {user.email}
                            </Typography>
                            <Typography color="text.secondary" style={{ flex: 1 , display: 'flex' , justifyContent:'center' }}>
                                {user.username}
                            </Typography>
                            <div>
                                <Button variant="contained" style={{marginRight:7}} onClick={() => approveUser(user._id)}>
                                    Approve
                                </Button>
                                <Button variant="contained" onClick={() => deleteUser(user._id)}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    )}
                </Paper>
            }
                    <Toolbar/>
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
            <Toolbar/>
            {
                screenplays && 
                <Paper elevation={3} style={{padding:20}}>
                    {screenplays.map(screenplay =>
                        <div key={screenplay._id} style={{display:'flex',alignItems:'center',padding:8}}>
                            <Typography component="p" variant="h7">
                                {screenplay.title}
                            </Typography>
                            <Typography color="text.secondary" style={{ flex: 1 , display: 'flex' , justifyContent:'center' }}>
                                {screenplay.type}
                            </Typography>
                            <div>
                                <Button variant="contained" onClick={() => deletePlay(screenplay._id)}>
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

export default Home