import React from 'react'
import Box from "@mui/material/Box";
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import "./Dash.css"
import ProductList from '../Product/ProductList';

const Product = () => {
  return (
    <>
    <div className='bgcolor'>
    <Navbar />
    <Box height={70}/>
    <Box display='flex'>
    <Sidebar/>
    <Box component='main' sx={{flexGrow: 1, p:3}}>
     <ProductList />
    </Box>
  </Box>
    </div>
    </>
  )
}

export default Product;