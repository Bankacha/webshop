import React from 'react';
import { Table, Button } from 'react-bootstrap'
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
                        <th>Delete</th>
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
                                    <td><svg onClick={() => props.delete(item.id)} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg></td>

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