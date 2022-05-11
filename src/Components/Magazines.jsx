import { TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ResponsiveDrawer from './Sidebar';

function Magazines() {
  return (
    <div>
        <ResponsiveDrawer>
            <Typography variant="h3" component="div" gutterBottom>
                Add Magazines
            </Typography>
            <Toolbar/>
            <TextField id="filled-basic" label="Title" variant="filled" /> <br/> <br/> 
        </ResponsiveDrawer>
    </div>
  )
}

export default Magazines