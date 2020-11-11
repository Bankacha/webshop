import React from 'react';
import { Table } from 'react-bootstrap'
import './cart.css'


export default function Cart(props) {

    return (
        <div>
            <Table className="cart" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>In Cart</th>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.product}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className='text-right'><h4>Total Cost:</h4></td>
                        <td><h4>{props.cost}</h4></td>
                    </tr>
                </tfoot>
            </Table>
        </div>

    )
}