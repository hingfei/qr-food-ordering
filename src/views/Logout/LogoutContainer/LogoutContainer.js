import React from 'react';
import {Box} from '@mui/material';
import LogoutNavBar from '../LogoutNavBar';
import Footer from '../../../components/Footer';
import LogoutDetails from '../LogoutDetails';

function LogoutContainer() {
    return (
        <Box component="div" minHeight="100vh">
            <LogoutNavBar/>
            <LogoutDetails/>
            <Footer/>
        </Box>        
    );
}

export default LogoutContainer;