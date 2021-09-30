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
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
                integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
                crossorigin="anonymous"
            />
        </div>
    );
}

export default TableNumberContainer;