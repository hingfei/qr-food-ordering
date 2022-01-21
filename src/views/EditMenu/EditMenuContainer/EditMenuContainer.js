import React from 'react';
import{ useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../../context/AuthContextProvider";
import EditMenuNavBar from "../EditMenuNavBar";
import Footer from "../../../components/Footer";
import {Box} from "@mui/material";
//import EditMenuAddForm from "../EditMenuAddForm";
import MenuItem from "../EditMenuItems";
import axios from 'axios'
import LoadingSpinner from '../../../components/LoadingSpinner';
import {useHistory } from 'react-router-dom'
const _ = require("lodash")


function EditMenuContainer(){

    const [authUser] = useContext(AuthContext);
    const history = useHistory()
    const [MenuList, setMenuList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
   
    // Get Menu List from database
    useEffect(() => {
        if (isLoading) {
            axios.get('/restaurant/menu/'.concat(authUser))
                .then(response => {
                    console.log(response.data)
                    setMenuList(response.data)
                    setIsLoading(false);
                }
                )
                .catch(err => {
                    console.log(err)
                    history.push('/error')
                })
        }
    })

    if (isLoading) {
        return (
            <>
                <LoadingSpinner />
            </>
        )
    }
    else {

        const food_categories = _.groupBy(MenuList, 'categories')

        return (
            <Box sx={{ minHeight: "100vh" }}>
                <EditMenuNavBar />
                {Object.entries(food_categories).map(([key, value]) => {
                    return (
                        <div key={key} className="menu">
                            <div  className="heading">
                                <h3>&mdash; {key} &mdash; </h3>
                            </div>
                            {
                                value.map((item) => {
                                    return (
                                        <MenuItem key={item._id} {...item} />
                                    )

                                })
                            }
                        </div>
                    )
                })}
                <Footer />
            </Box>);
    }        
   
}

export default EditMenuContainer;