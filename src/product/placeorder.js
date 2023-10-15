import React from "react";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Header from "./header";
import { Link as RouterLink  } from 'react-router-dom' ;
import CssBaseline from '@mui/material/CssBaseline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



export default function Placeorder(){


return(
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <ShoppingBagIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Place your order here
      </Typography>
      <Box component="form" noValidate  sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="address"
              label="address"
              type="text"
              id="adress"
              autoComplete="address"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="state and pin code"
              label="state and pin code"
              type="text"
              id="state"
              autoComplete="state"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="phonenumber"
              label="Phone no."
              type="text"
              id="phonenumber"
              
            />
          </Grid>
          
          
        </Grid>
         <Link component={RouterLink} to="/payment " variant='body2'>
         <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Placeorder
        </Button>
            </Link>
        
        <Grid container justifyContent="flex-end">
          <Grid item>
           
          </Grid>
        </Grid>
      </Box>
    </Box>
    
  </Container>
)

};
