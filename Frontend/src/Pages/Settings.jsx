import React from 'react'
import Box from "@mui/material/Box";
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import List from '../Settings/List';
import "./Dash.css"


const Settings = () => {
  return (
    <>
    <div className='bgcolor'>
    <Navbar />
     <Box height={70}/>
      <Box display='flex'>
      <Sidebar/>
       <List />
    </Box>
    </div>
    </>
  )
}

export default Settings