class Product { 
    constructor(name, price = 100) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `toString: Name=${this.name}, Price=${this.price}`;
    }
}

function* createProductIterator() {
    yield new Product('hat');
    yield new Product('boots', 111111);
    yield new Product('umbrella');
}

let iterator = createProductIterator();
let result = iterator.next()
console.log(result.value.name === 'hat'); // ture
console.log(iterator.next().value.name === 'boots'); //true
console.log(iterator.next().value.name === 'umbrella'); // true
console.log(iterator.next().done); // true

let newIterator = createProductIterator();
newIterator.next();
let boots = newIterator.next();
console.log(boots.value.price == 111111);

let arrray = [...createProductIterator()];
arrray.forEach((x)=>{
    console.log(x.toString());
})
