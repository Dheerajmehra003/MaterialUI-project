import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Avatar, AvatarGroup, Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import profile from "../assets/13.png"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

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

export default function MyAccount() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Card>
           <CardContent>
            <Box display="flex" alignItems="center" gap="10px">
              <IconButton>
            <Avatar sx={{height:"60px", width:"60px"}} src={profile} />
              </IconButton>
            <Typography fontSize="20px" fontWeight="700">
              Dheeraj Mehra <br />
              <Typography fontSize="15px">
                Web Developer
              </Typography>
            </Typography>
            </Box>
             <Stack direction="row" marginTop="5px">
              <IconButton sx={{bgcolor:"black", border:" 1px solid" , height:"35px" , width:'35px'}} >
                <EmailOutlinedIcon sx={{color:"white" , height:'20px', width:'20px'}} />
              </IconButton>
              <IconButton sx={{ border:" 1px solid" , height:"35px" , width:'35px'}}>
                <CallIcon sx={{height:'20px', width:'20px'}} />
              </IconButton>
              <IconButton sx={{ border:" 1px solid" , height:"35px" , width:'35px'}}>
                <WhatsAppIcon sx={{height:'20px', width:'20px'}} />
              </IconButton>
              <IconButton sx={{ border:" 1px solid"  , height:"35px" , width:'35px'}}>
                <VideocamOutlinedIcon sx={{height:'20px', width:'20px'}} />
              </IconButton>
             </Stack>
             <Typography>
              Time Slots
             </Typography>
           </CardContent>
          </Card>
        </Grid>
        <Grid size={8}>
        <Card>
           <CardContent>
            <Typography>
              Recent Projects
            </Typography>
           </CardContent>
          </Card>
        </Grid>
        <Grid size={4}>
        <Card>
           <CardContent>
            <Typography>
              Detailed information
            </Typography>
           </CardContent>
          </Card>
        </Grid>
        <Grid size={4}>
        <Card>
           <CardContent>
            <Typography>
              Calender
            </Typography>
           </CardContent>
          </Card>
        </Grid>
        <Grid size={4}>
        <Card>
           <CardContent>
            <Typography>
              Inbox
            </Typography>
           </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
