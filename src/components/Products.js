import React from 'react';
import { Card, CardColumns, Button, Form, Col, Row } from 'react-bootstrap'
import './cart.css'

export default class Merch extends React.Component {



    render() {
        const newList = this.props.searchInput.length === 0 ? this.props.productList : this.props.productList.filter( product => product.name.toLowerCase().includes(this.props.searchInput.toLowerCase()) || product.product.toLowerCase().includes(this.props.searchInput.toLowerCase()))
        return (
            <div>
                <Row>
                    <Col className='search' mb='5'>
                        <Form.Control onChange={(event) => this.props.handleSearch(event)}  style={{border: 'solid 5px'}} placeholder='click to search for products' />
                    </Col>
                </Row>

                <CardColumns>
                    {
                        newList.map((product, i) => {
                            return (
                                <Card style={{ width: '400px' }} md={4} key={i}>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.product}</Card.Title>
                                        <Card.Text>
                                            {product.name}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <h3 className="text-center">{product.price}</h3>
                                    </Card.Footer>
                                    <Button onClick={() => this.props.addToCart(product)} style={{ width: '100%' }}>to cart</Button>
                                </Card>
                            )
                        })
                    }

                </CardColumns>
            </div>

        )
    }
}