import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Videos from './Components/Videos';
import Screenplays from './Components/Screenplays';
import Magazines from './Components/Magazines';
import Home from './Components/Home';
import User from './Components/User';
import Homeuser from './Components/Homeuser';
import Login from './Components/Login';
import jwt_decode from "jwt-decode";
import Navigate from './Components/Navigate';

function App() {
  
  const [user, setuser] = React.useState(null);

  React.useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      var decoded = jwt_decode(token);
      setuser(decoded);
    } catch {}
  })
  

  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Homeuser user={user}/>}/>
          <Route exact path="/add_videos" element={<Videos/>}/>
          <Route exact path="/add_screenplays" element={<Screenplays/>}/>
          <Route exact path="/add_magazines" element={<Magazines/>}/>
          <Route exact path="/admin" element={<Home/>}/>
          <Route exact path="/users" element={<User/>}/>
        </Routes>
    </Router>
  )
}

export default App