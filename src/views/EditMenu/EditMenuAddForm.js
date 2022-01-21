import * as React from 'react';
import {useContext, useState} from 'react';
import { AuthContext } from "../../context/AuthContextProvider";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import './EditMenuAddButton.css';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
     '& .MuiDialogContent-root': {
       padding: theme.spacing(2),
     },
     '& .MuiDialogActions-root': {
       padding: theme.spacing(1),
     },
   }));

const BootstrapDialogTitle = (props) => {
const { children, onClose, ...other } = props;

return (
     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
     {children}
     {onClose ? (
          <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
          }}
          >
          <CloseIcon />
          </IconButton>
     ) : null}
     </DialogTitle>
     );
}; 

BootstrapDialogTitle.propTypes = {
     children: PropTypes.node,
     onClose: PropTypes.func.isRequired,
   };

function EditMenuAddForm(){
     const [open, setOpen] = React.useState(false);
     const [newTitle, setTitle] = useState('');
     const [newDescription, setDescription] = useState('');
     const [newCategory, setCategory] = useState('');
     const [newPrice, setPrice] = useState('');
     const [newImage, setImage] = useState('');
     const [authUser] = useContext(AuthContext);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

     const handleTitleChange = e =>{
          setTitle(e.target.value);
     }

     const handleDescriptionChange = e =>{
          setDescription(e.target.value);
     }

     const handleCategoryChange = e =>{
          setCategory(e.target.value);
     }

     const handlePriceChange= e =>{
          setPrice(e.target.value);
     }

     const handleImageChange = e =>{
          setImage(e.target.value);
     }

     const handleSubmit =()=>{
          const data ={
               title: newTitle,
               price: newPrice,
               description: newDescription,
               categories: newCategory,
               image: newImage,
               restaurant_id: authUser
          }

          const AuthConfig = {
               headers: {
                   Authorization: "Bearer " + localStorage.getItem("token"),
               },
           };

          axios.post('menu/',data, AuthConfig)
          .then(response =>{
               console.log(response)
               setTimeout(() => {
                    window.location.reload();
                }, 1500);
           }).catch(error =>{
                console.log(error)
           })

           setOpen(false);
     };

     return(
          <>
               <Button variant = "contained" id ="add_button" sx={{ float: "right"}} size = "small" startIcon={<AddIcon />} onClick = {handleClickOpen}>
                    Add New Item
               </Button>
               <BootstrapDialog
               onClose={handleClose}
               aria-labelledby="customized-dialog-title"
               open={open}
               >
               <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
               ADD MENU ITEM
               </BootstrapDialogTitle>

                    <DialogContent dividers>
                         <DialogContentText>
                         Please enter the details of the food item. 
                         The food item will be updated to the menu. 
                         </DialogContentText>

                         <Box  component="form"
                              sx={{
                              marginTop: 2,
                              '& > :not(style)': { m: 1},
                              }}
                              noValidate
                              autoComplete="off"
                              
                         >

                              <TextField  
                              color="primary" 
                              focused size="large" 
                              variant ="standard" 
                              id="title" 
                              label="Title" 
                              value = {newTitle}
                              onChange ={handleTitleChange}
                              type="text" 
                              width='25ch'/>

                              <TextField  
                              color="primary" 
                              focused size="large" 
                              variant ="standard" 
                              id="category" 
                              label="Category"
                              value ={newCategory} 
                              onChange = {handleCategoryChange}
                              type="text" 
                              width='25ch'  />

                              <TextField  
                              color="primary"
                              focused size="large"
                              variant ="standard" 
                              id="price" 
                              label="Price" 
                              value = {newPrice}
                              onChange = {handlePriceChange}
                              type="number" 
                              width="25ch"  />

                              <TextField  
                              color="primary"
                              focused size="large"
                              variant ="standard" 
                              id="image" 
                              label="Image URL" 
                              value = {newImage}
                              onChange ={handleImageChange}
                              type="text" 
                              width="25ch"  />

                              <TextField  
                              color="primary" 
                              focused size="large"
                              variant ="standard" 
                              id="description" 
                              label="Description" 
                              value ={newDescription}
                              onChange = {handleDescriptionChange}
                              type="text" 
                              fullWidth  
                              multiline rows ={4} />

                         </Box>

                    </DialogContent>
                    <DialogActions>
                         <Button variant="contained" onClick={handleSubmit}>Add</Button>
                    </DialogActions>
               </BootstrapDialog>
          </>
     );

}


export default EditMenuAddForm;