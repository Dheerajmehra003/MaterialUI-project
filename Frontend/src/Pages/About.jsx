import React from 'react'
import Sidebar from '../Components/Sidebar'
import Box from "@mui/material/Box";
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <>
    <Navbar />
    <Box height={70}/>
    <Box display='flex'>
      <Sidebar/>
      <h1>About</h1>
    </Box>
    </>
  )
}

export default About