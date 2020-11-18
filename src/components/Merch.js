import React from 'react';
import Cart from './Cart';
import Products from './Products'
// import { Route } from 'react-router-dom';
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
        let newCart = this.state.cart.filter(p => p.item.id !== id)
        this.setState({
            cart: newCart
        })
    }

    // pushProduct = (obj) => {
    //     axios.post(`https://5fabf5ed03a60500167e74ff.mockapi.io/webshop/merch`, {
    //         product: obj.product,
    //         name: obj.name,
    //         price: obj.price
    //     }).then(response => {
    //         this.getAllMerch()
    //     })
    // }

    handleAddToCart = (product) => {
        // const newPrice = parseInt(product.price)
        // let total = this.state.totalCost + newPrice;

        let cartItem = {
            item: product,
            quantity: 1
        }
        console.log(this.state.cart)
        const existing = this.state.cart.find(i => i.item.id === product.id)

        if (existing) {

            let newExisting = { ...existing };
            let newCart = [...this.state.cart];
            const existingIndeex = this.state.cart.indexOf(existing)
            newExisting.quantity += 1;
            newCart[existingIndeex] = newExisting;


            this.setState({
                cart: newCart
            })
        } else {
            this.setState({
                cart: [...this.state.cart, cartItem],
                cartCount: this.state.cartCount + 1,
            })
        }
        console.log(this.state.cart)

    }

    handleSearchInput = (event) => {
        this.setState({
            searchField: event.target.value
        })
    }

    calculateTotalCost = () => {
        let total = 0;
        for (let item of this.state.cart) {
            let price = parseInt(item.item.price)
            total += price * item.quantity
        }
        return total
    }

    increseQuantity = (item) => {
        const idx = this.state.cart.indexOf(item);
        let newItem = { ...item, quantity: item.quantity + 1 }
        const newCart = [...this.state.cart]
        newCart[idx] = newItem;
        this.setState({
            cart: newCart
        })
    }

    decreseQuantity = (item) => {
        console.log(item)
        if (item.quantity === 1) {
            this.setState({
                cart: this.state.cart.filter(i => i.item.id !== item.item.id)
            })

        } else {
            const index = this.state.cart.indexOf(item);
            const newCart = [...this.state.cart];
            const newItem = { ...item, quantity: item.quantity - 1 };
            newCart[index] = newItem;
            this.setState({
                cart: newCart
            })
        }

    }

    // deleteFromCart = (item) => {
    //     let newCart = this.state.cart.filter(i => i.id !== item.id)
    //     this.setState({
    //         cart: newCart
    //     })
    // }

    render() {

        return (
            <div>
                {
                    this.state.cart.length > 0 ? (
                        <Cart cart={this.state.cart} cost={this.state.totalCost} delete={this.deleteButton} total={this.calculateTotalCost} increse={this.increseQuantity} decrese={this.decreseQuantity}></Cart>

                    ) : null
                }
                <Products productList={this.state.merch} addToCart={this.handleAddToCart} pushProduct={this.pushProduct} searchInput={this.state.searchField} handleSearch={this.handleSearchInput}></Products>
            </div>

        )
    }
}