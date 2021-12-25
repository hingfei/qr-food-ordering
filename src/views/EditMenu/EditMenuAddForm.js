import * as React from 'react';
import Button from '@mui/material/Button';
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

function EditMenuAddForm(){
     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

     const handleSubmit =() =>{
          console.log('New food item is updated to the menu');
          setOpen(false);
     };

     return(
          <>
               <Button variant = "contained" id ="add_button" sx={{ float: "right"}} size = "small" startIcon={<AddIcon />} onClick = {handleClickOpen}>
                    Add New Item
               </Button>
               <Dialog open = {open} onClose = {handleClose} fullWidth maxWidth='md'>
                    <DialogTitle> ADD NEW FOOD ITEM</DialogTitle>
                    <DialogContent>
                         <DialogContentText>
                         Please enter the details of the food item. 
                         The food item will be updated to the menu. 
                         </DialogContentText>

                         <Box  component="form"
                              sx={{
                              '& > :not(style)': { m: 1},
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
                         <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
               </Dialog>
          </>
     );

}


export default EditMenuAddForm;