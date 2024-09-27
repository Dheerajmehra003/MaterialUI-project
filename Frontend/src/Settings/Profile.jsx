import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Profile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
         <Card>
          <CardContent>
            <Typography fontWeight="700" fontSize="30px" paddingLeft="20px">
              Dheeraj Mehra
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Stack direction="row" spacing={1} >
              <IconButton>
              <EmailIcon sx={{color:'black'}} />
              </IconButton>
              <Typography paddingTop="8px">
                dheerajsinghmehra0405@gmail
              </Typography>
            </Stack>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Stack direction="row" spacing={1} >
              <IconButton>
              <SmartphoneIcon sx={{color:'black'}} />
              </IconButton>
              <Typography paddingTop="8px">
                (+91) 8295920415 
              </Typography>
            </Stack>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Stack direction="row" spacing={1} >
              <IconButton>
              <LocationOnIcon sx={{color:'black'}} />
              </IconButton>
              <Typography paddingTop="8px">
                Panchkula , Chandigarh
              </Typography>
            </Stack>

          </CardContent>
         </Card>
        </Grid>
        <Grid size={8}>
        <Card>
          <CardContent>
          <Typography fontWeight="600" fontSize="20px" paddingLeft="20px" paddingTop="8px">
              About Me
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Typography>
            Graduated with a computer application degree from kurukshetra University .
            I have 1-year of react experience through various projects I made like(I have made projects using redux,
            context api , jquery). I have worked using various library and frameworks (tailwind, materialui, bootstrap ). 
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Typography fontWeight="600" fontSize="20px" paddingLeft="20px" paddingTop="8px">
              Details
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Stack direction="row" spacing={4} >
            <Typography fontWeight="600" fontSize="15px" paddingLeft="20px" minWidth="100px" >
              Portfolio:
              </Typography>
              <Typography>
              https://portfolio-dheeraj-mehra.netlify.app/
              </Typography>
            </Stack>
              <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Stack direction="row" spacing={4} >
            <Typography fontWeight="600" fontSize="15px" paddingLeft="20px" minWidth="100px" >
              Linkedin:
              </Typography>
              <Typography>
              https://portfolio-dheeraj-mehra.netlify.app/
              </Typography>
            </Stack>
              <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Stack direction="row" spacing={4} >
            <Typography fontWeight="600" fontSize="15px" paddingLeft="20px" minWidth="100px" >
              Github:
              </Typography>
              <Typography>
              https://portfolio-dheeraj-mehra.netlify.app/
              </Typography>
            </Stack>
              <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
          </CardContent>
        </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
