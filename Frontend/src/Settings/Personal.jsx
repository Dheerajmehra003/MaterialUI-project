import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';

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

export default function Personal() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Card>
            <CardContent >
            <Typography fontWeight="600" fontSize="20px" paddingLeft="20px">
              Personal Information
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
              <Stack spacing={2} direction="row" marginBottom="20px">
              <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue="Dheeraj"
              />
              <TextField
                required
                id="outlined-required"
                label="Lastname"
                defaultValue="Mehra"
              />
              </Stack>
              <Stack spacing={2} marginBottom="20px">
              <TextField
                id="outlined-multiline-flexible"
                label="Bio"
                multiline
                rows={4}
                />
              </Stack>
              <Stack spacing={2} direction="row" marginBottom="20px">
              <TextField
                required
                id="outlined-required"
                label="User Type"
                defaultValue="Super Admin"
              />
              </Stack>
            
            </CardContent>
          </Card>
        </Grid>
        <Grid size={6}>
        <Card>
        <CardContent >
            <Typography fontWeight="600" fontSize="20px" paddingLeft="20px">
              Contact Information
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
              <Stack spacing={2} direction="row" marginBottom="20px">
              <TextField
                required
                id="outlined-required"
                label="Contact Ph"
                defaultValue="Dheeraj"
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="dheerajsinghmehra0405@gmail"
              />
              </Stack>
              <Stack spacing={2} marginBottom="20px">
              <TextField
                required
                id="outlined-required"
                label="Portfolio url"
                defaultValue="dheerajsinghmehra0405@gmail"
              />
              </Stack>
              <Stack spacing={2}  marginBottom="20px">
              <TextField
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                rows={4}
                />
              </Stack>
            
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
