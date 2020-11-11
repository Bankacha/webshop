import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Merch from '../components/Merch'


export default class Home extends React.Component {


    render() {

        return (
                <Row>
                    <Col>
                    <h1 className='text-center'>Pazarite onLine</h1>
                    </Col>
                    <Merch></Merch>
                </Row>
        )
    }
}
