import React from 'react';
import {Box, Container, Typography} from "@mui/material";

function Footer(props) {
    return (
        <Box bgcolor={"text.secondary"}
             sx = {{marginTop : "auto", width: "100%", height: "3vw"}}
             color={"white"}
             px={{xs:3, sm:10}}
             py={{xs :5, sm:10}}>
            <Container maxWidth={"lg"}>
                <Typography textAlign={"center"} variant="body2">
                    © Copyright 1999 - 2021 Jasper Ng Guo Foong
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;