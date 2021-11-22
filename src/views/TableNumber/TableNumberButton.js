import React from 'react';
import './TableNumberButton.css';
import {Box, Button} from '@mui/material';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function TableNumberButton({tableNumber}) {
    const history = useHistory()


    function handleSubmitNumber()
    {
        const data = {tableNumber: tableNumber};

        // todo : problem with manually changing session id in browser fucks up the logic
        // THIS SHOULDN'T BE NULL!!!
        if (sessionStorage.getItem("session_id") === null)
        {
            // todo: if ald have session id ?
            axios
                .post('http://localhost:8000/users/', data
                )
                .then(response => {
                    sessionStorage.setItem("session_id", response.data._id)
                }).catch(error => {
                console.log(error)
            })
        }
        // update table number
        else {
            axios.put('http://localhost:8000/users/'.concat(sessionStorage.getItem(("session_id"))), data
                )
                    .then(response => {
                        // todo: remove after debug
                        console.log(response)
                    }).catch(error => {
                        console.log(error)
                    })
        }
        // redirects
        history.push('/menu')
    }
    return (
        <Box mt={3} sx={{justifyContent: "center", alignItems: "center", display:"flex"}}>
            <Button id="page_button"
                    color="primary"
                    size='lg'
                    variant = "contained"
                    onClick ={()=> handleSubmitNumber()}
            >Submit
            </Button>
        </Box>
    );
}

export default TableNumberButton;