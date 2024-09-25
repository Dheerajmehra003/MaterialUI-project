import React from 'react'
import Sidebar from '../Components/Sidebar'
import Box from "@mui/material/Box";
import Navbar from '../Components/Navbar'

const Users = () => {
  return (
    <div>
    <Navbar />
    <Box height={70}/>
    <Box display='flex'>
      <Sidebar/>
      <h1>Users</h1>
    </Box>
    </div>
  )
}

export default Users;