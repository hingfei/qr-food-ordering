import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Footer from "../../../components/Footer";
import ProfileNavBar from "../ProfileNavBar";
import ProfileName from "../ProfileName";
import { Paper } from "@mui/material";
import ProfileTitle from "../ProfileTitle";
import ProfileFields from "../ProfileFields";
import ProfileEditFields from "../ProfileEditFields";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";

function ProfileContainer() {
    const [details, setDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const AuthConfig = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    };
     // Get restaurant details
     useEffect(() => {
         if (isLoading) {
             axios.get('/restaurant/profile', AuthConfig)
                 .then((result) => {
                     setDetails(result.data);
                     setIsLoading(false);
                 }).catch(error => {
                     console.log(error);
                     setIsLoading(false);
                 })
         }
    });

    if (isLoading) {
        return (
            <>
                <LoadingSpinner />
            </>
        )
    } else {
        return (
            <Box sx={{ minHeight: "100vh", backgroundColor: "FBF1E4" }}>
                <ProfileNavBar />
                <ProfileTitle />
                <ProfileEditFields details={details}/>
                <Box
                    display="flex"
                    width="100%"
                    minHeight="70vh"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        id="profileContainer"
                        display="flex"
                        width="90%"
                        columnGap={5}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                display: "flex",
                                width: "400px",
                                height: "500px",
                                marginTop: 2,
                            }}
                        >
                            <ProfileName name={details.restaurantName}/>
                        </Paper>
                        <Paper
                            elevation={3}
                            sx={{
                                width: "70%",
                                marginTop: 2,
                                marginBottom: 4,
                            }}
                        >
                            <ProfileFields details={details}/>
                        </Paper>
                    </Box>
                </Box>
                <Footer />
            </Box>
        );

    }

}

export default ProfileContainer;
