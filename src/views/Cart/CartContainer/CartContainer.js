import React from 'react';
import CartNavBar from "../CartNavBar";
import CartTitle from "../CartFooter";
import CartTable from "../CartTable";
import CartFooter from "../CartFooter";
import CartTotal from "../CartTotal";
import CartConfirmButton from "../CartConfirmButton";

function CartContainer() {
    return (
        <div>
            Cart Page
            <CartNavBar/>

            <CartTitle/>

            <CartTable/>

            <CartTotal/>
            
            <CartConfirmButton/>
            
            <CartFooter/>
        </div>
    );
}

export default CartContainer;