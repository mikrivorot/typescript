class Product { 
    constructor(name, price = 100) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `toString: Name=${this.name}, Price=${this.price}`;
    }
}

function createProductIterator() {
    let hat = new Product('hat');
    let boots = new Product('boots');
    let umbrella = new Product('umbrella');

    let lastVal;

    return { //возвращаем объект, у которого есть next function
        next() { 
            switch(lastVal) {
                case undefined:
                    lastVal = hat;
                    return {value: hat, done: false};
                case hat:
                    lastVal = boots;
                    return {value: boots, done: false};
                case boots:
                    lastVal = umbrella;
                    return {value: umbrella, done: false};
                case umbrella:
                    return {value: undefined, done: true};
            }
        }
    }
}

let iterator = createProductIterator();
let result = iterator.next()
console.log(result.value.name === 'hat'); // ture
console.log(iterator.next().value.name === 'boots'); //true
console.log(iterator.next().value.name === 'umbrella'); // true
console.log(iterator.next().done); // true
