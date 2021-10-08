import React from 'react';
import image1 from '../images/decklogo.jpg';
import './TableNumberRestaurantName.css';

function TableNumberRestaurantName() {
    return (
        <div className ="restaurant">
            <h1 className="name"> THE DECK RESTAURANT</h1>
            <img src={image1} alt="" 
            className="center"
            height = {150}
            width = {300} />
        </div>
    );
}

export default TableNumberRestaurantName;