import React from "react";
import { Box, List, ListItem, Typography, Divider } from "@mui/material";
import ProfileQrGenerator from "./ProfileQrGenerator";
import ProfileQrDownloadButton from "./ProfileQrDownloadButton";
import ProfileFieldContainer from "./ProfileContainer/ProfileFieldContainer";

function ProfileFields() {
    // sample data
    const restaurantDetails = {
        firstName: "Hayden",
        lastName: "Soong",
        gender: "Male",
        icNum: 990127435649,
        contactNum: "0127788990",
        ssm: 202101000005,
        restaurantName: "The Deck Restaurant",
        restaurantAddress:
            "No. 67, Jalan 99, Bandar Puchong Jaya, Puchong, 47170, Selangor.",
        emailAddress: "soonghingfei@hotmail.com",
        password: "fkyou69",
    };

    return (
        <Box display="flex" flexDirection="column">
            {/* Name */}
            <ProfileFieldContainer
                title="Name"
                description={
                    restaurantDetails.firstName +
                    " " +
                    restaurantDetails.lastName
                }
            />
            {/* Gender */}
            <ProfileFieldContainer
                title="Gender"
                description={restaurantDetails.gender}
            />
            {/* IC Number */}
            <ProfileFieldContainer
                title="Ic Number"
                description={restaurantDetails.icNum}
            />
            {/* Contact Number */}
            <ProfileFieldContainer
                title="Contact Number"
                description={restaurantDetails.contactNum}
            />
            {/* SSM */}
            <ProfileFieldContainer
                title="SSM"
                description={restaurantDetails.ssm}
            />
            {/* Restaurant Name */}
            <ProfileFieldContainer
                title="Restaurant Name"
                description={restaurantDetails.restaurantName}
            />
            {/* Restaurant Address */}
            <ProfileFieldContainer
                title="Restaurant Address"
                description={restaurantDetails.restaurantAddress}
            />
            {/* Email Address */}
            <ProfileFieldContainer
                title="Email Address"
                description={restaurantDetails.emailAddress}
            />
            {/* Password */}
            <ProfileFieldContainer
                title="Password"
                description={restaurantDetails.password}
            />
            {/* Qr Code */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">QR Code</Typography>
                    </ListItem>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <ProfileQrGenerator />
                        <ProfileQrDownloadButton />
                    </Box>
                </List>
                <Divider variant="middle" />
            </Box>
        </Box>
    );
}

export default ProfileFields;
