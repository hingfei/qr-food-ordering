import * as React from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './EditMenuAddButton.css';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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
  
  
function MenuItem({_id,title,description,categories,price,image}) {

    const [openEdit, setOpenEdit] = React.useState(false);
    const [editTitle, setTitle] = useState(title);
    const [editDescription, setDescription] = useState(description);
    const [editCategories, setCategory] = useState(categories);
    const [editPrice, setPrice] = useState(price);
    const [editImageURL, setImage] = useState(image);
    const [openDelete, setOpenDelete] = React.useState(false);

    const handleDeleteOpen =()=>{
        setOpenDelete(true);
    }

    const handleDeleteClose =()=>{
        setOpenDelete(false);
    }

     const handleEditOpen = () => {
          setOpenEdit(true);
     };

     const handleEditClose = () => {
          setOpenEdit(false);
     };

    
    const handleTitleChange = e => {
    setTitle(e.target.value);
    }
    
    const handleDescriptionChange = e => {
    setDescription(e.target.value);
    }

    const handlePriceChange = e =>{
    setPrice(e.target.value);
    }

    const handleCategoryChange = e =>{
    setCategory(e.target.value);
    }

    const handleImageChange = e =>{
        setImage(e.target.value);
        }

    function handleEditItem(){
        const data = {
            "title" : editTitle,
            "price" : editPrice,
            "description" : editDescription,
            "categories" : editCategories,
            "image" :editImageURL      
        }

        const AuthConfig = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        };

        axios.put('menu/'.concat(_id), data, AuthConfig)
            .then(response =>{
                    console.log(response.data)
                    setTimeout(() => {
                        window.location.reload();
                    }, 50);
                
            }).catch((error)=>{
                console.log(error);
            })

        setOpenEdit(false);
     };
    
     function handleRemoveItem(){
        const AuthConfig = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        };
    
        axios.delete('menu/'.concat(_id), AuthConfig)
            .then(response =>{
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }).catch((error)=>{
                console.log(error);
            })

        setOpenDelete(false);
     };


    return (
        <>
        <div className="menu-items">
            <img className='modal-img' src={editImageURL} alt={title} />
            <div className="details">
                <div className="more-details">
                    <h5>{title}</h5>
                    <h5 className="price"> RM {price} </h5>
                </div>
                <p>{description}</p>
                <Stack direction="row" spacing={2} container justifyContent="center">
                <Button onClick = {handleEditOpen} variant = "contained" id ="editButton" size = "small">Edit</Button>
                <BootstrapDialog
                onClose={handleEditClose}
                aria-labelledby="customized-dialog-title"
                open={openEdit}
                >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleEditClose}>
                Edit Menu Item
                </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <DialogContentText>
                            Please enter the details of the food item. 
                            The food item will be updated to the menu
                            </DialogContentText>

                            <Box  component="form"
                                sx={{
                                    marginTop: 3,   
                                '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"     
                                
                            >

                                <TextField 
                                color="primary" 
                                variant="standard"
                                focused size="large"
                                id="title" 
                                label="Title"
                                value={editTitle} 
                                type="text" 
                                width='25ch'
                                onChange = {handleTitleChange} />

                                <TextField  
                                color="primary" 
                                focused size="large"
                                 variant ="standard" 
                                 id="category" 
                                 label="Category"  
                                 value={editCategories}
                                 type="text" 
                                 width='25ch'  
                                 onChange = {handleCategoryChange}/>

                                <TextField  
                                color="primary"
                                focused size="large" 
                                variant ="standard" 
                                id="price" 
                                label="Price" 
                                value={editPrice} 
                                type="number" 
                                width="25ch"  
                                onChange = {handlePriceChange}/>

                                <TextField  
                                color="primary"
                                focused size="large" 
                                variant ="standard" 
                                id="image" 
                                label="Image" 
                                value={editImageURL} 
                                type="url" 
                                width="25ch"  
                                onChange = {handleImageChange}/>

                                <TextField  
                                color="primary" 
                                focused size="large" 
                                variant ="standard" 
                                id="description" 
                                label="Description" 
                                value={editDescription} 
                                type="text" 
                                fullWidth  
                                multiline rows ={4} 
                                onChange = {handleDescriptionChange}/>

                                

                            </Box>
                        </DialogContent>

                        <DialogActions>
                            <Button variant="contained" onClick={handleEditItem}>Save</Button>
                        </DialogActions>
                    </BootstrapDialog>
                    
                    <Button onClick = {handleDeleteOpen} variant = "contained" id ="deleteButton" size = "small">Delete</Button>
                    <BootstrapDialog
                    onClose={handleDeleteClose}
                    aria-labelledby="customized-dialog-title"
                    open={openDelete}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleDeleteClose}>
                    Delete Food Item
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                                <DialogContentText>
                                Are you sure want to remove this item?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button variant="contained" onClick={handleRemoveItem}>Delete</Button>
                            </DialogActions>
                            </BootstrapDialog>
                    </Stack>
            </div>
        </div>
    </>      
    );
}


export default MenuItem;