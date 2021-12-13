import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {Button, Grid} from '@mui/material';
import MenuItemModal from "./EditMenuModal";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './EditMenuAddButton.css';

// import {useContext} from "react";
// import {OrderContext} from '../../App';


function MenuItem({title, description, price, index, image}) {

    const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

    // const orderContext = useContext(OrderContext);

    function handleEditItem({title,description, price, index, image}){
        console.log('Click edit button')
        setOpen(false);
    }
    
    return (
                <Card sx={{ width: "100%"}} key={index}>
                    <Grid container spacing={2} padding={1}>
                        <Grid item xs={3}>
                            <MenuItemModal price={price} title={title} image={image} description={description}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={"h6"} >
                                {title}
                            </Typography>
                            <Typography variant={"body1"} noWrap={true}>
                                {description}
                            </Typography>
                            <Typography variant={"body2"} noWrap={true} pt={2}>
                                RM {price}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{display: "grid", justifyItems:"center", alignItems:"center"}}>
                            <Button variant = "contained" id ="add_button" size = "small"onClick = {handleClickOpen}>
                             Edit
                             </Button>
                        <Dialog open = {open} onClose = {handleClose} fullWidth maxWidth='md'>
                                <DialogTitle>Edit Food Item</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                    Please enter the details of the food item. 
                                    The food item will be updated to the menu
                                    </DialogContentText>

                                    <Box  component="form"
                                        sx={{
                                        '& > :not(style)': { m: 1 },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                        
                                    >
                                        <TextField  color="primary" focused size="small" variant ="filled" id="index" label="Index" type="text" width='25ch'/>
                                        <TextField  color="primary" focused size="small" variant ="filled" id="title" label="Title" type="text" width='25ch'/>
                                        <TextField  color="primary" focused size="small" variant ="filled" id="description" label="Description" type="text" fullWidth  multiline rows ={4} />
                                        <TextField  color="primary" focused size="small" variant ="filled" id="category" label="Category" type="text" width='25ch'  />
                                        <TextField  color="primary" focused size="small" variant ="filled" id="price" label="Price" type="number" width="25ch"  />

                                        

                                    </Box>

                                    <label htmlFor="upload-photo">
                                            <input
                                            style={{ display: 'none' }}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file"
                                            />
                                                <br />
                                            <Fab
                                            color="primary"
                                            size="small"
                                            component="span"
                                            aria-label="add"
                                            variant="extended"
                                            >
                                            <AddIcon /> Upload photo
                                            </Fab>
                                            <br />
                                            
                                        </label>

                                </DialogContent>

                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleEditItem}>Save</Button>
                                </DialogActions>
                        </Dialog>
                        </Grid>
                    </Grid>
                </Card>
    );
}


export default MenuItem;