import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

function Login() {

    let navigate = useNavigate();

    const [email, setemail] = useState(null);
    const [pass, setpass] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: pass
        };
        const user = await axios.post('https://videos-backends.herokuapp.com/login', data);
        const token = user.data;
        localStorage.setItem('token', token);
        window.location='/';
    };


  return (
    <div>
        <Navbar/>
            <form onSubmit={submitHandler} style={{backgroundColor:'white',height:'100vh',color:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <TextField onChange={(e) => setemail(e.target.value)} required id="filled-basic" label="Enter Email" variant="filled"/> <br />
                <TextField onChange={(e) => setpass(e.target.value)} required id="filled-basic" label="Enter Password" variant="filled"/> <br />
                <Button type="submit" variant="contained">Sign In</Button>
            </form>
        <Footer/>
    </div>
  )
}

export default Login