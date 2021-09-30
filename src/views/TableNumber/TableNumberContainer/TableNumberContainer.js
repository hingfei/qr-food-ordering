import React from 'react';
import TableNumberNavBar from "../TableNumberNavBar";
import TableNumberRestaurantName from "../TableNumberRestaurantName";
import TableNumberInputField from "../TableNumberInputField";
import TableNumberButton from "../TableNumberButton";

function TableNumberContainer(props) {
    return (
        <div>
            Table Page
            <TableNumberNavBar/>
            <TableNumberRestaurantName/>
            <TableNumberInputField/>
            <TableNumberButton/>
        </div>
    );
}

export default TableNumberContainer;