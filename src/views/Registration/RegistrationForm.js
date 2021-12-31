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

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import axios from 'axios'

const theme = createTheme();

export default function RegistrationForm() {
  const [gender, setGender] = useState('');
  const [firstName, setFirstName] = useState('Hayden');
  const [lastName, setLastName] = useState('Soong');
  const [icNumber, setICNumber] = useState('991234085678');
  const [contact, setContact] = useState('01234567890');
  const [ssm, setSSM] = useState('ABC-123456');
  const [restaurantName, setRestaurantName] = useState('The Deck 3');
  const [restaurantAddress, setRestaurantAddress] = useState('Deck, USM Penang');
  const [email, setEmail] = useState('thedeck3@gmail.com');
  const [password, setPassword] = useState('test123');

  const handleGenderChange = e => {
    setGender(e.target.value);
  }

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  }

  const handleICNumberChange = e => {
    setICNumber(e.target.value);
  }

  const handleContactChange = e => {
    setContact(e.target.value);
  }

  const handleSSMChange = e => {
    setSSM(e.target.value);
  }

  const handleRestaurantName = e => {
    setRestaurantName(e.target.value);
  }

  const handleRestaurantAddress = e => {
    setRestaurantAddress(e.target.value);
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }


  const handleSubmit=()=>{
    const data = {
      firstname: firstName,
      lastname: lastName,
      gender: gender,
      icNo: icNumber,
      contactNo: contact,
      ssm: ssm,
      restaurantName: restaurantName,
      restaurantAddress: restaurantAddress,
      email: email,
      hashed_password: password
    }
    // todo: check response code, if 201 all good, if 409 = email ald taken!
    axios.post('/auth/signup', data)  
    .then(response => {  
       console.log(response) 
    }).catch(error => {  
    	console.log(error)  
})

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
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    variant="filled"
                    name="firstName"
                    required
                    id="firstName"
                    label="First Name"
                    placeholder="First Name"
                    onChange = {handleFirstNameChange}
                    value={firstName}
                    autoFocus
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                      required
                      variant="filled"
                      id="lastName"
                      label="Last Name"
                      onChange = {handleLastNameChange}
                      value={lastName}
                      name="lastName"
                      placeholder="Last Name"
                    />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth >
                  <TextField
                        required
                        id="gender"
                        select
                        label="Gender"
                        value={gender}
                        onChange={handleGenderChange}
                        variant="filled"
                        placeholder="Gender"
                      >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <TextField
                      required
                      fullWidth
                      id="icNumber"
                      label="IC Number"
                      name="icNumber"
                      value={icNumber}
                      onChange = {handleICNumberChange}
                      variant="filled"
                      placeholder="IC Number"
                    />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <TextField
                      required
                      fullWidth
                      id="contact"
                      label="Contact Number"
                      name="contact"
                      onChange = {handleContactChange}
                      value={contact}
                      variant="filled"
                      placeholder="Contact Number"
                    />
                </FormControl>
              </Grid>
            
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                  required
                  fullWidth
                  id="ssm"
                  label="SSM"
                  name="ssm"
                  value={ssm}
                  onChange = {handleSSMChange}
                  variant="filled"
                  placeholder="SSM"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                    <TextField
                      required
                      fullWidth
                      id="restaurantName"
                      label="Restaurant Name"
                      name="restaurantName"
                      onChange = {handleRestaurantName}
                      value={restaurantName}
                      variant="filled"
                      placeholder="Restaurant Name"
                    />
                  </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                  required
                  fullWidth
                  id="restaurantAddress"
                  name="restaurantAddress"
                  label="Restaurant Address"
                  onChange = {handleRestaurantAddress}
                  value={restaurantAddress}
                  variant="filled"
                  placeholder="Restaurant Address"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    variant="filled"
                    placeholder="E-mail"
                    value={email}
                    onChange = {handleEmailChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    value={password}
                    onChange = {handlePasswordChange}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    variant="filled"
                    placeholder="Password"
                  />
                </FormControl>
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
                <Link href="/login" variant="body2">
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

