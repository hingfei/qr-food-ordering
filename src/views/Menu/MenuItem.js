import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {Button, Grid} from '@mui/material';
import MenuItemModal from "./MenuItemModal";
import {useContext} from "react";
import {OrderContext} from '../../App';


function MenuItem({title, description, price, index, image}) {

    const orderContext = useContext(OrderContext);

    function handleAddItem(title){
        orderContext.orderListDispatch({type:'add_item_to_cart', payload: title })
    }

    return (
                <Card sx={{ width: "100%"}} key={index}>
                    <Grid container spacing={2} padding={1}>
                        <Grid item xs={3}>
                            <MenuItemModal price={price} title={title} image={image} description={description}/>
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
                            <Button
                                id = "page_button"
                                variant="contained"
                                size={"small"}
                                color={"primary"}
                                onClick={() => handleAddItem(title)}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
    );
}


export default MenuItem;