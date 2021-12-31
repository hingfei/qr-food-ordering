import React from 'react';
import './TableNumberButton.css';
import {Box, Button} from '@mui/material';
import axios from 'axios';
import {useHistory} from "react-router-dom";

function TableNumberButton({tableNumber}) {
    const history = useHistory();
    // updateUser
    function updateUser (){
        const data = {
            tableNumber: tableNumber,
        }

        axios.put('users/'.concat(sessionStorage.getItem(("session_id"))), data
        )
            .then(response => {
                console.log(response.data)
                return history.push('/menu')
            }).catch(error => {
            console.log(error)
        })
    }


    function createOrder (id){
        const user = id
        const amount = 0
        const paid = false
        const done = false
        const orders = ""

        // COMBINE DATA TO POST
        const data = {
            "user": user,
            "amount": amount,
            "paid": paid,
            "done": done,
            "orders": orders
        }

        axios.post('orders/', data)
            .then(response => {
                console.log(response.data)
                sessionStorage.setItem("orderId", response.data._id)
                return history.push('/menu')
            })
            .catch(error => {
                console.log(error)
            })
    }


    function handleSubmitNumber()
    {
        // POST USER ID -> ORDER ID -> UPDATE USER ID agn
        const data = {
            tableNumber: tableNumber,
        };

        // todo : problem with manually changing session id in browser fucks up the logic
        // THIS SHOULDN'T BE NULL!!!
        if (sessionStorage.getItem("session_id") === null)
        {
            // todo: if ald have session id ?
            axios
                .post('http://localhost:8000/users/', data
                )
                .then(response => {
                    // CREATE ORDER ID
                    console.log(response.data)
                    sessionStorage.setItem("session_id", response.data._id)
                    createOrder(response.data._id)
                }).catch(error => {
                console.log(error)
            })
        }
        // update table number
        else {
            updateUser()
        }

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