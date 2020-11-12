import React from 'react';
import {Nav} from 'react-bootstrap'

export default function Navbar (props) {

        return (
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="./components/Cart.js">Shop</Nav.Link>
                </Nav.Item>
                
            </Nav>
        )
    }
