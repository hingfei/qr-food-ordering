import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    Slide,
    TextField,
    DialogActions,
    DialogContent,
    MenuItem,
} from "@mui/material";
import './ProfileEditFields.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

// Dialog transition
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Genders option
const genders = [
    {
        value: "male",
        label: "Male",
    },
    {
        value: "female",
        label: "Female",
    },
];

function ProfileEditFields({ details }) {
    // useState to open dialog
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    
    const [firstName, setFirstName] = useState(details.firstname);
    const [lastName, setLastName] = useState(details.lastname);
    const [gender, setGender] = useState(details.gender);
    const [icNo, setIcNo] = useState(details.icNo);
    const [contactNo, setContactNo] = useState(details.contactNo);
    const [ssm, setSsm] = useState(details.ssm);
    const [restaurantName, setRestaurantName] = useState(details.restaurantName);
    const [restaurantAddress, setRestaurantAddress] = useState(details.restaurantAddress);
    const [email, setEmail] = useState(details.email);

    // Show Message
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    
    // Show success message
    const showMessage = () => {
        setOpenAlert(true);
    }

    // Close success message
    const closeMessage = () => {
        setOpenAlert(false);
    }

    // Open dialog
    const handleOpen = () => {
        setOpen(true);
    };
    // Close dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Handle save/update button
    const handleSave = () => {
        // Combine data to put
        const data = {
            "firstname": firstName,
            "lastname": lastName,
            "gender": gender,
            "icNo": icNo,
            "contactNo": contactNo,
            "ssm": ssm,
            "restaurantName": restaurantName,
            "restaurantAddress": restaurantAddress,
            "email": email
        }

        const AuthConfig = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        };

        // Update the profile
        axios.put('restaurant/profile', data, AuthConfig)
            .then(() => {
                showMessage();
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }).catch((error) => {
                console.log(error);
            })
    };

    return (
        <>
            <Box mt={2} justifyContent="flex-end" display="flex" width="90%">
                <Button
                    id="edit_button"
                    color="primary"
                    size="medium"
                    variant="contained"
                    onClick={handleOpen}
                >
                    Edit Profile
                </Button>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="md"
                TransitionComponent={Transition}
            >
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            color="primary"
                            size="large"
                            id="firstName"
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="lastName"
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="gender"
                            label="Gender"
                            select
                            fullWidth
                            variant="standard"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            {genders.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            color="primary"
                            size="large"
                            id="icNum"
                            label="IC Number"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={icNo}
                            onChange={(e) => setIcNo(e.target.value)}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="contactNum"
                            label="Contact Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="ssm"
                            label="SSM"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={ssm}
                            onChange={(e) => setSsm(e.target.value)}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="restaurantName"
                            label="Restaurant Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={restaurantName}
                            onChange={(e) => setRestaurantName(e.target.value)}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="restaurantAddress"
                            label="Restaurant Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={restaurantAddress}
                            onChange={(e) => setRestaurantAddress(e.target.value)}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="emailAddress"
                            label="Email Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>

                <Snackbar anchorOrigin={{vertical:'top', horizontal:'center'}} open={openAlert} autoHideDuration={6000} onClose={closeMessage}>
                <Alert onClose={closeMessage} severity="success" sx={{ width: '100%' }}>
                    Update Successfully!
                </Alert>
            </Snackbar>
            </Dialog>
        </>
    );
}

export default ProfileEditFields;
