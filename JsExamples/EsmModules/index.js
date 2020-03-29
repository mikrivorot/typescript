import calcTax from './tax';

class Product {
    constructor(name, price = 100) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new Product('hat');
let taxedPrice = calcTax(product.price);
console.log(`Name ${product.price}, Taxed Price ${taxedPrice}`);