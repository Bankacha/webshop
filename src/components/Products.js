import React from 'react';
import { Card, CardColumns, Button,  } from 'react-bootstrap'


export default class Merch extends React.Component {



    render() {
        return (
            <div>
                <CardColumns>
                    {
                        this.props.productList.map((product, i) => {
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