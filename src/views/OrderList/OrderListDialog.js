import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, Divider, Grid, Slide } from "@mui/material";
import Typography from "@mui/material/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function OrderListDialog({ orderID, orderDetails }) {
    const [open, setOpen] = useState(false);

    // Function to show the details of the order.
    const handleDetails = () => {
        setOpen(true);
    };

    // Function to close the dialog.
    const handleClose = () => {
        setOpen(false);
    };

    console.log(orderDetails);
    return (
        <>
            <Button
                onClick={handleDetails}
                size="small"
                color="info"
                variant="outlined"
            >
                Details
            </Button>
            <Dialog
                onClose={handleClose}
                open={open}
                fullWidth={true}
                maxWidth="md"
                scroll="paper"
                TransitionComponent={Transition}
            >
                <DialogTitle>Order ID: {orderID}</DialogTitle>
                <DialogContent>
                    <Divider />
                <Grid container width={"100%"} paddingX={5} paddingY={1}>
                                <Grid item xs={7} ml={2}>
                                    <Typography
                                        variant="body1"
                                        fontWeight={"bold"}
                                    >
                                        Title
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} ml={4}>
                                    <Typography variant="body1"
                                        fontWeight={"bold"}>
                                        Quantity
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography variant="body1"
                                        fontWeight={"bold"}>
                                        Total Price
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider />
                    {orderDetails.map((details) => {
                        return (
                            <Grid key={details.id} container width={"100%"} paddingX={5} paddingY={1}>
                                <Grid item xs={8}>
                                    <Typography
                                        variant="body1"
                                        fontWeight={"medium"}
                                    >
                                        {details.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>
                                        x {details.quantity}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>
                                        RM {details.total}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                    })}
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default OrderListDialog;
