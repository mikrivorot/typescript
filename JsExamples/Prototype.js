let Product = function(name, price) {
    this.name = name;
    this.price = price
}

Product.prototype.toString = function() {
    return `toString: Name=${this.name}, Price=${this.price}`;
}

Product.prototype.show = function() {
    console.log(this.toString());
}

let TaxedProduct = function(name, price, tax) {
    Product.call(this, name, price);
    this.tax = tax;
}

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.toString = function() {
    return `toString: Name=${this.name}, Price=${this.price}, Tax=${this.price}`;
}

let hat = new Product('hat', 100);
let hatTaxed = new TaxedProduct('hat', 100, 10);

hat.show();
hatTaxed.show();
console.log(`${hat instanceof TaxedProduct}`);
console.log(`${Product.prototype.isPrototypeOf(hat)}`);
