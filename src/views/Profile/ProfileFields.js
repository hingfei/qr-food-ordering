import React from "react";
import {
    Box,
    List,
    ListItem,
    Typography,
    Divider,
} from "@mui/material";
import ProfileQrGenerator from "./ProfileQrGenerator";
import ProfileQrDownloadButton from "./ProfileQrDownloadButton";

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
        restaurantAddress: "No. 67, Jalan 99, Bandar Puchong Jaya, Puchong, 47170, Selangor.",
        emailAddress: "soonghingfei@hotmail.com",
        password: "fkyou69"
    }

    return (
        <Box display="flex" flexDirection="column">
            {/* Name */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">Name</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            {restaurantDetails.firstName} {restaurantDetails.lastName}
                        </Typography>
                    </ListItem>
                </List>
                <Divider variant="middle" />
            </Box>
            {/* Gender */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">Gender</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            {restaurantDetails.gender}
                        </Typography>
                    </ListItem>
                </List>
                <Divider variant="middle" />
            </Box>
            {/* IC Number */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">IC Number</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            {restaurantDetails.icNum}
                        </Typography>
                    </ListItem>
                </List>
                <Divider variant="middle" />
            </Box>
            {/* Contact Number */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">Contact Number</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            {restaurantDetails.contactNum}
                        </Typography>
                    </ListItem>
                </List>
                <Divider variant="middle" />
            </Box>
            {/* SSM */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">SSM</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            {restaurantDetails.ssm}
                        </Typography>
                    </ListItem>
                </List>
                <Divider variant="middle" />
            </Box>
            {/* Restaurant Name */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">Restaurant Name</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            {restaurantDetails.restaurantName}
                        </Typography>
                    </ListItem>
                </List>
                <Divider variant="middle" />
            </Box>
            {/* Restaurant Address */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">Restaurant Address</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            {restaurantDetails.restaurantAddress}
                        </Typography>
                    </ListItem>
                </List>
                <Divider variant="middle" />
            </Box>
            {/* Email Address */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">Email Address</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            {restaurantDetails.emailAddress}
                        </Typography>
                    </ListItem>
                </List>
                <Divider variant="middle" />
            </Box>
            {/* Password */}
            <Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">Password</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            {restaurantDetails.password}
                        </Typography>
                    </ListItem>
                </List>
                <Divider variant="middle" />
            </Box>
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
