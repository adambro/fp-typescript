import { Cart } from "./Cart";
import * as $ from 'jquery'
let input = document.querySelector('div')
$.ajax()
enum Colors {
    RED = "red",
    BLUE = "blue"
}
let cart = new Cart();
cart.addProduct({
    description:'prod1 descr',
    title: 'prod1',
    price: 1.99,
    id: 1,
    quantity: 10
});

cart.addProduct({
    description:'prod2 descr',
    title: 'prod2',
    price: 2.99,
    id: 2,
    quantity: 5
})

console.log(cart.showProducts())