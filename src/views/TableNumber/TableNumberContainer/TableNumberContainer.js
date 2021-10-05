import React from 'react';
import TableNumberNavBar from "../TableNumberNavBar";
import TableNumberRestaurantName from "../TableNumberRestaurantName";
import TableNumberInputField from "../TableNumberInputField";
import TableNumberButton from "../TableNumberButton";
import TableNumberFooter from "../TableNumberFooter";

function TableNumberContainer(props) {
    return (
        <div>

            <TableNumberNavBar/>
            <TableNumberRestaurantName/>
            <TableNumberInputField/>
            <TableNumberButton/>
            <TableNumberFooter/>
        </div>
    );
}

export default TableNumberContainer;