import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from './Navbar'


export default function Layout(props) {


    return (
        <div>
            <Navbar></Navbar>
            <Container>
                {props.children}
            </Container>
        </div>

    )

}