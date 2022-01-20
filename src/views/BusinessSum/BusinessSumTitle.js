import React from 'react';
import BarChartIcon from "@mui/icons-material/BarChart";
import {Paper, Typography} from "@mui/material";

function BusinessSumTitle() {
    return (
        <Paper  sx={{display: "flex", height: "10vw", alignItems: "center",
            maxHeight: "75px"}}>
            <BarChartIcon fontSize={"medium"} sx={{ml: "16px"}}/>
            <Typography variant="h6" ml={2}>
                Business Summary
            </Typography>
        </Paper>
    );
}

export default BusinessSumTitle;