import * as React from 'react';
import { useContext, useState } from "react";
import { OrderContext } from '../../App';
import './MenuItem.css'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import NumberInputSpinner from "../../components/NumberInputSpinner";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function MenuItem({ _id, title, price, description, categories, image }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const orderContext = useContext(OrderContext);

    function handleAddItem(id, title, price) {
        orderContext.orderListDispatch({ type: 'add_item_to_cart', payload: { id: id, title: title, price: price } })
    }
    const imageUrl = image
    return (
        <>
            <div className="menu-items">
                <img onClick={handleClickOpen} src={imageUrl} alt={title} />
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <AppBar sx={{ position: 'relative', background:'#4f46e5'}}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <DialogContent>
                        <img className='modal-img' src={imageUrl} alt={title} />
                        <div className="details">
                            <div className="more-details">
                                <h5>{title}</h5>
                                <h5 className="price"> RM {price} </h5>
                            </div>
                            <p>{description}</p>
                            <NumberInputSpinner id={_id} title={title} price={price} />
                        </div>
                    </DialogContent>
                </Dialog>
                <div className="details">
                    <div className="more-details">
                        <h5>{title}</h5>
                        <h5 className="price"> RM {price} </h5>
                    </div>
                    <p>{description}</p>
                    <button onClick={() => handleAddItem(_id, title, price)}>Add To Cart</button>
                </div>
            </div>
        </>
    );
};


export default MenuItem;