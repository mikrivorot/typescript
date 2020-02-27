// function somefunction (...list) {
//     console.log(`${list},  ${typeof list}, ${list.length}`);
// }
// somefunction(...[1,2,3])
// somefunction(1,2,3)
// somefunction([1,2,3])

const objectWithGettersAndSetters = {
    _price: 1,
    get price() {
        return this._price;
    },
    set price(newPrice) {
        this._price = newPrice;
    }
}

console.log(objectWithGettersAndSetters.price);