import React from 'react';
import TableNumberNavBar from "../TableNumberNavBar";
import TableNumberRestaurantName from "../TableNumberRestaurantName";
import TableNumberInputField from "../TableNumberInputField";
import TableNumberButton from "../TableNumberButton";
import Footer from "../../../components/Footer";

function TableNumberContainer(props) {
    return (
        <div>
            <TableNumberNavBar/>
            <TableNumberRestaurantName/>
            <TableNumberInputField/>
            <TableNumberButton/>
            <Footer/>
        </div>
    );
}

export default TableNumberContainer;