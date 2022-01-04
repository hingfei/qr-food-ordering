import React, { useEffect, useState } from 'react';
import TableNumberNavBar from "../TableNumberNavBar";
import TableNumberRestaurantName from "../TableNumberRestaurantName";
import TableNumberInputField from "../TableNumberInputField";
import Footer from "../../../components/Footer";
import {Box} from "@mui/material";
import { useParams,useHistory } from 'react-router-dom';
import LoadingSpinner from '../../../components/LoadingSpinner';
import axios from 'axios'

function TableNumberContainer() {
    const history = useHistory();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [restaurantName, setRestaurantName] = useState("")

    // todo: change this to others 
    const restaurantDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices ultrices dui vel aliquam. Proin interdum laoreet vehicula. Morbi odio neque, posuere at nisl ac, vehicula semper diam. Fusce at tellus sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nec tellus tempus, dictum felis non, suscipit metus. Praesent finibus elit et nulla rutrum luctus. Praesent sit amet nisi vestibulum, molestie lacus non, consequat lacus.";
    const restaurantPicture = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80"

    // Menu List from database
    useEffect( ()=> {
        if (isLoading){
            axios.get('restaurant/'.concat(id))
            .then(response =>{
                    setRestaurantName(response.data.restaurantName);
                    setIsLoading(false);
            }
            )
            .catch(err => {
                if (err.response.status === 404){
                    history.push('/not-found')
                    setIsLoading(false);
                }
                else{
                    console.log(err)
                    history.push('/error')
                }
            })
        }
    })

    if (isLoading){
        return (
            <>
                <LoadingSpinner/>
            </>
        )
    }
    else{
        return (
            <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh",background: 'linear-gradient(to right, #ece9e6, #ffffff)'}}>
                <TableNumberNavBar/>
                <Box sx={{ display: "inline-flex",
                    flexDirection:"column",
                    alignItems: "center" ,
                    minHeight: "80vh",
                    justifyContent: "center" ,
                }}>
                    <TableNumberRestaurantName restaurantName={restaurantName}
                     restaurantDescription={restaurantDescription} 
                     restaurantPicture={restaurantPicture}/>
                    <TableNumberInputField/>
                </Box>
                <Footer/>
            </Box>
        );
    }
}

export default TableNumberContainer;