import React from 'react';
import {Alert, Box, Collapse, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


function ReceiptNotification() {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    <strong> Order Received! </strong>
                </Alert>
            </Collapse>
        </Box>
    );
}

export default ReceiptNotification;