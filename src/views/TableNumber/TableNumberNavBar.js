import React from 'react';
import {Navbar} from "react-bootstrap";

function TableNumberNavBar(props) {
    return (
        <>
            <Navbar bg="light">
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src="./images/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Great Food
                    </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default TableNumberNavBar;