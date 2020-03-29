let hat = {
    name: "Hat",
    price: 100,
    gerPriceTax() {
        return Number(this.price) * 1.2;
    }
}

let equalHat = hat
let copyButNotEqualHat = {...hat}


console.log(`Hat: ${hat.price}, ${hat.gerPriceTax()}`);
console.log(`toString: ${hat.toString()}`);
console.log(`get prototype: ${Object.getPrototypeOf(hat)}`);
console.log(`${equalHat === copyButNotEqualHat}`); // false
console.log(`${equalHat === hat}`); // true
console.log(`${Object.getPrototypeOf(hat) === Object.getPrototypeOf(equalHat)}`); //true
