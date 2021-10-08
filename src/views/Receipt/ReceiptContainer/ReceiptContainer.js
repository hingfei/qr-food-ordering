import React from 'react';
import ReceiptNavBar from "../ReceiptNavBar";
import ReceiptNotification from "../ReceiptNotification";
import ReceiptDetails from "../ReceiptDetails";
import ReceiptTable from "../ReceiptTable";
import ReceiptBackButton from "../ReceiptBackButton";

function ReceiptContainer() {
    return (
        <>
            <ReceiptNavBar/>
            <ReceiptNotification/>
            <ReceiptDetails/>
            <ReceiptTable/>
            <ReceiptBackButton/>
        </>
    );
}

export default ReceiptContainer;