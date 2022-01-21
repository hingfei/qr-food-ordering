import React from "react";
import { Box, List, ListItem, Typography, Divider } from "@mui/material";
import ProfileQrGenerator from "./ProfileQrGenerator";
import ProfileFieldContainer from "./ProfileContainer/ProfileFieldContainer";

function ProfileFields({details}) {

    return (
        <Box display="flex" flexDirection="column">
            {/* Name */}
            <ProfileFieldContainer
                title="Name"
                description={
                    details.firstname +
                    " " +
                    details.lastname
                }
            />
            {/* Gender */}
            <ProfileFieldContainer
                title="Gender"
                description={details.gender.charAt(0).toUpperCase() + details.gender.slice(1)}
            />
            {/* IC Number */}
            <ProfileFieldContainer
                title="Ic Number"
                description={details.icNo}
            />
            {/* Contact Number */}
            <ProfileFieldContainer
                title="Contact Number"
                description={details.contactNo}
            />
            {/* SSM */}
            <ProfileFieldContainer
                title="SSM"
                description={details.ssm}
            />
            {/* Restaurant Name */}
            <ProfileFieldContainer
                title="Restaurant Name"
                description={details.restaurantName}
            />
            {/* Restaurant Address */}
            <ProfileFieldContainer
                title="Restaurant Address"
                description={details.restaurantAddress}
            />
            {/* Email Address */}
            <ProfileFieldContainer
                title="Email Address"
                description={details.email}
            />
            {/* Qr Code */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">QR Code</Typography>
                    </ListItem>
                        <ProfileQrGenerator res_ID = {details._id}/>
                </List>
                <Divider variant="middle" />
            </Box>
        </Box>
    );
}

export default ProfileFields;
