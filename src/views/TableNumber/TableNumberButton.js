import React from 'react';
import './TableNumberButton.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function TableNumberButton(props) {
    return (
        <div id="container">
            <Button id="butt1" variant="primary" size='lg'>Submit</Button>{' '}
        </div>
    );
}

export default TableNumberButton;