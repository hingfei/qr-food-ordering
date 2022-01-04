import React from 'react'
import { Ghost } from 'react-kawaii'
import {Box, Typography} from "@mui/material";

export default function SomethingWentWrong() {
    return (
        <Box sx={{background:'linear-gradient(to right, #c9d6ff, #e2e2e2)', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent: 'center', flexWrap:'wrap'}}>
            <Box sx={{minHeight:'75vh'}}>
                <Ghost size={360} mood="shocked" color="#E0E4E8" />
                <Box sx={{flexBasis:'100%', height:'0'}}></Box>
                <Typography mt={3} variant='h3' fontWeight="bold" align="center">
                    Oh No !
                </Typography>
                <Box sx={{flexBasis:'100%', height:'0'}}></Box>
                <Typography mt={3} variant='h5' color='gray'>
                    Something Went Wrong......
                </Typography>
            </Box>

        </Box>
        
    )
}
