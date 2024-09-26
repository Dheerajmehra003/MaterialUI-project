import React from 'react'
import Sidebar from '../Components/Sidebar'
import Box from "@mui/material/Box";
import Navbar from '../Components/Navbar'
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "./Dash.css"
import AccordionDash from '../Components/AccordionDash';
import Barchart from '../Charts/Barchart';
import CountUp from 'react-countup';

const Dashboard = () => {
  return (
    <>
    <div className='bgcolor'>
     <Navbar />
     <Box height={70}/>
     <Box display='flex'>
    <Sidebar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2} >
        <Grid size={8}>
        <Stack spacing={2} direction='row'>
            <Card sx={{ minWidth: 49 + "%", height: 150,  }} className='gradient'>  
          <CardContent> 
            <div className='icon'>
              <CreditCardOutlinedIcon />
            </div>
            <Typography gutterBottom variant="h5" component="div"  color='white'>
              $<CountUp
              delay={0.2}
              end={500.00}
              duration={1.0} 
            />
            </Typography>
            <Typography gutterBottom variant="body" component="div" sx={{color:'white'}}>
            Total Earning
            </Typography>
          </CardContent>
          </Card>
          <Card sx={{ minWidth: 49 + "%", height: 150,  }} className='lightgradient'>   
          <CardContent> 
            <div className='icon'>
              <ShoppingBagIcon />
            </div>
            <Typography gutterBottom variant="h5" component="div" color='white'>
            $<CountUp
              delay={0.2}
              end={900.00}
              duration={1.0} 
            />
            </Typography>
            <Typography gutterBottom variant="body" component="div" sx={{color:'white'}}>
            Total Order
            </Typography>
          </CardContent>
          </Card>  
        </Stack>
        </Grid>
        <Grid size={4}>
        <Stack spacing={2}>
        <Card sx={{ height: 70, padding:''}} className='gradient'>    
      <CardContent sx={{padding:'10px'}}>
      <Stack spacing={1} direction='row'> 
      <div className='TotalIncome'>
          <StorefrontOutlinedIcon />
      </div>
        <div className='paddingAll'>
       <span className='priceTitle'>$203k</span> <br/>
       <span className='PriceSubtitle'>Total Income</span>
        </div>
        </Stack>
      </CardContent>
    </Card>           
    <Card sx={{height: 70}} className='lightgradient' >  
    <CardContent sx={{padding:'10px'}}>
      <Stack spacing={1} direction='row'> 
      <div className='TotalIncome'>
          <StorefrontOutlinedIcon />
      </div>
        <div className='paddingAll'>
       <span className='priceTitle'>$30k</span> <br/>
       <span className='PriceSubtitle'>This week</span>
        </div>
        </Stack>
      </CardContent>
      </Card>  
      </Stack>       
        </Grid>
      </Grid>
      <Box height={20} />
      <Grid container spacing={2}>
      <Grid size={8}>
      <Card sx={{ height: 56 + "vh" }}>  
      <CardContent> 
       <Barchart />
      </CardContent>
      </Card>
      </Grid>
      <Grid size={4}>
      <Card sx={{ height: 56 + "vh" }}>  
      <CardContent> 
      <div className='paddingAll'>
       <span className='priceTitle'>Popular Products</span>
        </div>
      <AccordionDash />
      </CardContent>
      </Card>
      </Grid>
      </Grid>
    </Box>
    </Box>
    </div>
    </>
  )
}

export default Dashboard