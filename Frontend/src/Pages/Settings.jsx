import React from 'react'
import Box from "@mui/material/Box";
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

const Settings = () => {
  return (
    <>
     <Navbar />
     <Box height={70}/>
      <Box display='flex'>
      <Sidebar/>
      <h1>settings</h1>
    </Box>
    </>
  )
}

export default Settings