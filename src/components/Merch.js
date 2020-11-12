import React from 'react';
import Cart from './Cart';
import Products from './Products'
import { Route } from 'react-router-dom';
const axios = require('axios').default;



export default class Merch extends React.Component {

    state = {
        merch: [],
        cart: [],
        cartCount: 0,
        totalCost: null,
        searchField: ''
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

    deleteButton = (id) => {
        // axios.delete(`https://5fabf5ed03a60500167e74ff.mockapi.io/webshop/merch/${id}`).then(response => {
        //     this.getAllMerch()
        // })
        let newCart =this.state.cart.filter( p => p.id !== id)
        this.setState({
            cart: newCart
        })
    }

    pushProduct = (obj) => {
        axios.post(`https://5fabf5ed03a60500167e74ff.mockapi.io/webshop/merch`, {
            product: obj.product,
            name: obj.name,
            price: obj.price
        }).then(response => {
            this.getAllMerch()
        })
    }

    handleAddToCart = (product) => {
        const newPrice = parseInt(product.price)
        let total = this.state.totalCost + newPrice
        this.setState({
            cart: [...this.state.cart, product],
            cartCount: +1,
            totalCost: total
        })
        // this.pushProduct(product)
    }

    handleSearchInput = (event) => {
        this.setState({
            searchField: event.target.value
        })
    }


    render() {

        return (
            <div>
                {
                    this.state.cart.length > 0 ? (
                        <Cart cart={this.state.cart} cost={this.state.totalCost} delete={this.deleteButton}></Cart>

                    ) : null
                }
                <Products productList={this.state.merch} addToCart={this.handleAddToCart} pushProduct={this.pushProduct} searchInput={this.state.searchField} handleSearch={this.handleSearchInput}></Products>
            </div>

        )
    }
}