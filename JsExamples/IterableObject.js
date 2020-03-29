class Product { 
    constructor(name, price = 100) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `toString: Name=${this.name}, Price=${this.price}`;
    }
}

class GiftPack {
    constructor (name, ...products) {
        this.name = name;
        this.products = products;
    }
    getTotalPrics() {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
    *[Symbol.iterator]() {
        // this.products.forEach(product => yield product); //cannot do it in this way

        // yield this.products[0];
        // yield this.products[1];
        // yield this.products[2];   
        
        for (let product of this.products) {
            yield product;
        }
    }
}

let winter = new GiftPack('winter', new Product('hat'), new Product('boots', 111111), new Product('umbrella'));
[...winter].forEach(pack => console.log(`Product: ${pack}`));