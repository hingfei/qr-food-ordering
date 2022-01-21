import React from 'react';
import './TableNumberButton.css';
import {Box, Button} from '@mui/material';
import axios from 'axios';
import {useHistory, useParams} from "react-router-dom";

function TableNumberButton({tableNumber}) {
    // get Restaurant ID
    const { id } = useParams();
    const history = useHistory();


    // Update User
    function updateUser (){
        const data = {
            tableNumber: tableNumber,
        }

        axios.put('users/'.concat(sessionStorage.getItem(("session_id"))), data
        )
            .then(response => {
                return history.push('/menu/'.concat(id))
            }).catch(error => {
            console.log(error)
        })
    }

    // Create Order
    function createOrder (user_id){

        // data to POST
        const data = {
            "user": user_id,
            "amount": 0,
            "paid": false,
            "done": false,
            "orders": "",
            "restaurant_id": id
        }

        axios.post('orders/', data)
            .then(response => {
                sessionStorage.setItem("orderId", response.data._id)
                return history.push('/menu/'.concat(id))
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Handle POST Table Number to DB
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
                .post('users/', data
                )
                .then(response => {
                    // CREATE ORDER ID
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