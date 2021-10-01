import React from 'react';
import './MenuRestaurantName.css';
import image1 from '../images/decklogo.jpg';

function MenuRestaurantName(props) {
    return (
        <div id='container'>
            <div id='img-con'>
                <img src={image1} alt="" />
            </div>
            <div id='name'>
                <h1>The Deck Restaurant</h1>
            </div>
        </div>
    );
}

export default MenuRestaurantName;