import React , {useContext} from 'react';
import './LoginButton.css';
import {Box, Button} from '@mui/material';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AuthContext } from '../../context/AuthContextProvider';

function LoginButton({username, password}){

    const [authUser, setAuthUser] = useContext(AuthContext);
    function handleLogin(){
        
        // since login only accept application/x-www-form-urlencoded, change header
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        const AuthConfig = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }
        const data = JSON.stringify(
            'grant_type=&username='.concat(username) +'&password='.concat(password) + '&scope=&client_id=&client_secret=')
        axios.post('auth/login', JSON.stringify(data), config).then(
            response => {
                console.log(response.status)
                localStorage.setItem("token", response.data.access_token)

                //EXAMPLE OF HOW TO SEND REQUEST WITH JWT TOKEN
                axios.get('/restaurant/profile', AuthConfig)
                .then(response => {
                    // set AuthUser for the state to use
                    setAuthUser(response.data._id)
                    // redirect 
                    console.log(authUser)

                }).catch(error => {
                    console.log(error)
                })

                console.log(response.data) // show token, save token, redirect
            }).catch(error => {
                // unauthorized status code
                if (error.response.status === 401){
                    handleError()
                }
                else {
                    console.log(error)
                }
            })
    }

    // Show Error
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });


    const [open, setOpen] = React.useState(false);
    
    const handleError = () => {
        setOpen(true)
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


    return(
        <Box mt={3}>
            <Button id="login_button"
                    color="primary"
                    size='lg'
                    variant = "contained"
                    onClick ={()=> handleLogin()}
            >LOGIN
            </Button>

            <Snackbar anchorOrigin={{vertical:'top', horizontal:'center'}} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Wrong Username or Password !
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default LoginButton;