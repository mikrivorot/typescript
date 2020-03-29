const assert = require('assert').strict;
class Product {
    constructor (name, price = 100) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let data = new Map();
data.set('hat', new Product('hat'));
data.set('boots', new Product('boots', 101));
[...data.keys()].forEach(key => console.log(key));

const firstEntry = data.entries().next().value[0];
assert(firstEntry === 'hat');
console.log(data.entries().next().value) // boots product [name, entity]
