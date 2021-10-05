import React from 'react';
import CartNavBar from "../CartNavBar";
import CartTitle from "../CartTitle";
import CartTable from "../CartTable";
import CartTotal from "../CartTotal";
import CartConfirmButton from "../CartConfirmButton";
import Footer from "../../../components/Footer";

function CartContainer() {
    return (
        <div>
            <CartNavBar/>
            <CartTitle/>
            <CartTable/>
            <CartTotal/>
            <CartConfirmButton/>
            <Footer/>
        </div>
    );
}

export default CartContainer;