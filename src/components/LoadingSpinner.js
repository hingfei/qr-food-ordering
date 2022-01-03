import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

export default function LoadingSpinner() {
  return (
      <Box sx={{background: 'linear-gradient(to right, #FFFFFF, #ECE9E6)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{ width: '50%'}}>
        <Typography variant='h3' sx={{textAlign: 'center', mb:3}}>
            Loading...
        </Typography>
            <LinearProgress />
        </Box>
      </Box>
  );
}

