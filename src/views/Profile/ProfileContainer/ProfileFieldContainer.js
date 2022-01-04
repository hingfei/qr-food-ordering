import React from "react";
import {
    Box,
    List,
    ListItem,
    Typography,
    Divider,
} from "@mui/material";

const ProfileFieldContainer = ({title, description}) => {
    return (
        <Box>
            <List>
                <ListItem>
                    <Typography variant="h6">{title}</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </ListItem>
            </List>
            <Divider variant="middle" />
        </Box>
    );
};

export default ProfileFieldContainer;

