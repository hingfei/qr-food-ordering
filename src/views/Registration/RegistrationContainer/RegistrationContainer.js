import React from "react";
import RegistrationNavBar from "../../TableNumber/TableNumberNavBar";
import RegistrationForm from "../../Registration/RegistrationForm";
import {Box} from "@mui/material";
import Footer from "../../../components/Footer";

function RegistrationContainer() {
    return (
        <Box sx ={{display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "FBF1E4"}}>
            <RegistrationNavBar/>
            <RegistrationForm />
            <Footer/>
        </Box>
    );
}

export default RegistrationContainer;