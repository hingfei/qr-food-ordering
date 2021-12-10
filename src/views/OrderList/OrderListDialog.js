import React, {useState} from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogContent, Slide } from '@mui/material';
import Typography from '@mui/material/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>;
});

function OrderListDialog(orderDetails) {
  const [open, setOpen] = useState(false);

  // Function to show the details of the order.
  const handleDetails = () => {
      setOpen(true);
  }
  
  // Function to close the dialog.
  const handleClose = () => {
      setOpen(false);
  }

  return (
      <><Button
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
          maxWidth={"md"}
          scroll="paper"
          TransitionComponent={Transition}
      >
          <DialogTitle>Order ID:</DialogTitle>
          <DialogContent>
              <Typography>
                  Order Details
              </Typography>
          </DialogContent>
          <DialogActions>
              <Button variant="outlined" onClick={handleClose}>Close</Button>
          </DialogActions>
      </Dialog></>
  )
}

export default OrderListDialog;