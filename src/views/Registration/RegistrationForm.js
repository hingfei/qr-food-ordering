import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

const initialState ={
  firstName: '',
  lastName: '',
  gender: '',
  icNumber: '',
  contact: '',
  ssm: '',
  restaurantName: '',
  restaurantAddress: '',
  email: '',
  password: '',
}

export default function RegistrationForm() {

  const [value, setValue]= useState(initialState);

  const handleInputChange = e =>{
    const {name, values} = e.target
    setValue({
      ...value,
      [name]: values
    })
  }


  const handleSubmit=()=>{
     console.log('Clicked Submit Button');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={value.firstName}
                  onChange = {handleInputChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={value.lastName}
                  onChange = {handleInputChange}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  value={value.gender}
                  onChange = {handleInputChange}
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  fullWidth
                  id="icNumber"
                  label="IC Number"
                  name="icNumber"
                  value={value.icNumber}
                  onChange = {handleInputChange}
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  fullWidth
                  id="contact"
                  label="Contact Number"
                  name="contact"
                  value={value.contact}
                  onChange = {handleInputChange}
                  />
              </Grid>
            
              <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  fullWidth
                  id="ssm"
                  label="SSM"
                  name="ssm"
                  value={value.ssm}
                  onChange = {handleInputChange}
                  />
              </Grid>

              <Grid item xs={12}>
                  <TextField
                  required
                  fullWidth
                  id="restaurantName"
                  label="Restaurant Name"
                  value={value.restaurantName}
                  name="restaurantName"
                  onChange = {handleInputChange}
                  />
              </Grid>

              <Grid item xs={12}>
                  <TextField
                  required
                  fullWidth
                  id="restaurantAddress"
                  name="restaurantAddress"
                  label="Restaurant Address"
                  value={value.restaurantAddress}
                  onChange = {handleInputChange}
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
                  value={value.email}
                  onChange = {handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={value.password}
                  onChange = {handleInputChange}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              id="signUp"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick ={()=> handleSubmit()}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

