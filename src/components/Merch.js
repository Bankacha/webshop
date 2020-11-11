import React from 'react';
import Cart from './Cart';
import Products from './Products'

const axios = require('axios').default;



export default class Merch extends React.Component {

    state = {
        merch: [],
        cart: [],
        cartCount: 0,
        totalCost: null
    }

    getAllMerch = () => {
        axios.get('https://5fabf5ed03a60500167e74ff.mockapi.io/webshop/merch').then(response => {
            this.setState({
                merch: response.data
            })
        })
    }

    componentDidMount = () => {
        this.getAllMerch()
    }

    handleAddToCart = (product) => {
        let total = this.state.totalCost + product.price
        this.setState({
            cart: [...this.state.cart, product],
            cartCount: +1,
            totalCost: total
        })
        console.log(product.price)
    }


    render() {

        return (
            <div>
                {
                    this.state.cart.length > 0 ? (
                        <Cart cart={this.state.cart} cost={this.state.totalCost}></Cart>

                    ) : null
                }
                <Products productList={this.state.merch} addToCart={this.handleAddToCart}></Products>
            </div>

        )
    }
}