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
    IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import './ProfileEditFields.css';

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

// sample data
const restaurantDetails = {
    firstName: "Hayden",
    lastName: "Soong",
    gender: "male",
    icNum: 990127435649,
    contactNum: "0127788990",
    ssm: 202101000005,
    restaurantName: "The Deck Restaurant",
    restaurantAddress:
        "No. 67, Jalan 99, Bandar Puchong Jaya, Puchong, 47170, Selangor.",
    emailAddress: "soonghingfei@hotmail.com",
    password: "fkyou69",
};

function ProfileEditFields() {
    // useState to open dialog
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        console.log("Save");
    };

    // useState to set gender
    const [gender, setGender] = useState(restaurantDetails.gender);

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    // useState to show password
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
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
                            defaultValue={restaurantDetails.firstName}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="lastName"
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={restaurantDetails.lastName}
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
                            onChange={handleChange}
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
                            defaultValue={restaurantDetails.icNum}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="contactNum"
                            label="Contact Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={restaurantDetails.contactNum}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="ssm"
                            label="SSM"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={restaurantDetails.ssm}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="restaurantName"
                            label="Restaurant Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={restaurantDetails.restaurantName}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="restaurantAddress"
                            label="Restaurant Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={restaurantDetails.restaurantAddress}
                        />
                        <TextField
                            color="primary"
                            size="large"
                            id="emailAddress"
                            label="Email Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={restaurantDetails.emailAddress}
                        />
                        <Box width="100%" display="inline-flex">
                            <TextField
                                color="primary"
                                size="large"
                                id="password"
                                label="Password"
                                type={passwordShown ? "text" : "password"}
                                fullWidth
                                variant="standard"
                                defaultValue={restaurantDetails.password}
                            />
                            <IconButton aria-label="show" onClick={togglePassword}>
                                {passwordShown ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                            </IconButton>
                        </Box>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ProfileEditFields;
