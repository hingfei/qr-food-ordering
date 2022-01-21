import React, { useEffect, useState } from 'react';
import MenuNavBar from "../MenuNavBar";
import MenuItem from "../MenuItem";
import Footer from "../../../components/Footer";
import { Box } from "@mui/material";
import axios from 'axios'
import LoadingSpinner from '../../../components/LoadingSpinner';
import { useParams, useHistory } from 'react-router-dom'
const _ = require("lodash")

function MenuContainer() {

    // get restaurant id
    const { id } = useParams();
    const history = useHistory()
    const [MenuList, setMenuList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // Menu List from database
    useEffect(() => {
        if (isLoading) {
            axios.get('/restaurant/menu/'.concat(id))
                .then(response => {
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
                <MenuNavBar />
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

export default MenuContainer;