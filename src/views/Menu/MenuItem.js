import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {Button, Grid} from '@mui/material';
import MenuItemModal from "./MenuItemModal";


function MenuItem() {

    // Todo : Implement add items to cart logic
    function handleAddItem(e){
        console.log('clicked add button');
    }

    // Todo : change List to get from DB
    // Test List
    const menuList = [
        {
            title: 'Salad',
            description : 'tasty salad with 1000 vegetables and tomato',
            price : '20',
            image: './images/logo.svg'
        },
        {
            title: 'Chicken',
            description : 'BBQ chicken with bbq sauce',
            price : '50',
            image: './images/logo.svg'
        },
        {
            title: 'French Fries',
            description : 'Fries with tomato sauce',
            price : '10',
            image: './images/logo.svg'
        }
    ]

    return (
        menuList.map((item, index)=> {
            const {title, description, price} = item;
            return (
                <Card sx={{ width: "100%"}} key={index}>
                    <Grid container spacing={2} padding={1}>
                        <Grid item xs={3}>
                            <MenuItemModal {...item}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={"h6"} >
                                {title}
                            </Typography>
                            <Typography variant={"body1"} noWrap={true}>
                                {description}
                            </Typography>
                            <Typography variant={"body2"} noWrap={true} pt={2}>
                                RM {price}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{display: "grid", justifyItems:"center", alignItems:"center"}}>
                            <Button variant="contained" size={"small"} color={"primary"} onClick={handleAddItem}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            )
        })
    );
}


export default MenuItem;