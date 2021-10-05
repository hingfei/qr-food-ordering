import React from 'react';
import CartNavBar from "../CartNavBar";
import CartTitle from "../CartFooter";
import CartTable from "../CartTable";
import CartFooter from "../CartFooter";
import CartTotal from "../CartTotal";

function CartContainer() {
    return (
        <div>
            Cart Page
            <CartNavBar/>

            <CartTitle/>

            <CartTable/>

            <CartTotal/>

            <CartFooter/>
        </div>
    );
}

export default CartContainer;