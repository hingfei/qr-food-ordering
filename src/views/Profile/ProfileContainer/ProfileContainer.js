import React from "react";
import Box from "@mui/material/Box";
import Footer from "../../../components/Footer";
import ProfileNavBar from "../ProfileNavBar";
import ProfileName from "../ProfileName";
import { Paper } from "@mui/material";
import ProfileFields from "../ProfileFields";
import ProfileEditFields from "../ProfileEditFields";

function ProfileContainer() {
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "FBF1E4" }}>
            <ProfileNavBar />
            <ProfileEditFields/>
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
                            display:"flex",
                            width: "400px",
                            height: "500px",
                            marginTop: 2,
                        }}
                    >
                        <ProfileName />
                    </Paper>
                    <Paper
                        elevation={3}
                        sx={{
                            width: "70%",
                            marginTop: 2,
                            marginBottom: 4,
                        }}
                    >
                        <ProfileFields />
                    </Paper>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}

export default ProfileContainer;