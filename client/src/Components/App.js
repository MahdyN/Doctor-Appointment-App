import '../App.css';
import { React, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login"
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home'
import About from './About/About'
import Appointments from './Appointments/Appointments'
import MakeAppointment from './MakeAppointment/MakeAppointment'

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    
    useEffect(() => {
      fetch('/authorized_user')
      .then(res => {
          if (res.ok) {
            res.json()
            .then(user => {
              // console.log(user)
              
              setIsAuthenticated(true)
              setUser(user)
            })
          }
        })
      }, [])

      // hey Mahdy from Main
      // hey Mahdy from Main
      // hey Mahdy from Main


    if (!isAuthenticated) return <Login error={"Please Login"} setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

    return (
      
        <div className="container">
          <Navbar setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointments" element={<Appointments user={user} />} />
            <Route path="/makeappointment" element={<MakeAppointment user={user} />} />
          </Routes>
        </div>

      );
}

export default App;