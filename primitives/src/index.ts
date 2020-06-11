// import * as _ from 'lodash';
function calculateTax(amount: number): number { 
    return amount * 1.2
}

function writePrice(prod: string, price: number): void {
    console.log(`Price for '${prod}' = $${price.toFixed(2)}`);
}

const prices = [];
const prods = ['1', '2', '3'];
// prices.push(1); // rgument of type '1' is not assignable to parameter of type 'never'.

prices.forEach((price, index) => writePrice(prods[index], price));

enum Prod {Hat, Gloves, Umbrella};
enum ProdString {Hat = '1', Gloves = '2', Umbrella = '3'};
// enum OtherProd {Hat, Gloves = Prod.Gloves, Umbrella = '2'}; // Computed values are not permitted in an enum with string valued members

const product1: Prod = 0; 
const product2: Prod = Prod['Hat'];
const stringKey: string = Prod[0];
console.log(stringKey); // === 'Hat'

console.log(product1 === product2) // true

function acceptEnum(en: ProdString): void {
    // console.log(en);
}

const x: string = ProdString.Hat;
// acceptEnum(ProdString.Hat);

for (const key in ProdString) {
    console.log(ProdString[key]);
}
//Object.keys(Prod): 0,1,2,Hat,Gloves,Umbrella
// Object.values(Prod): Hat,Gloves,Umbrella,0,1,2
console.log('Object.keys(Prod): ' + Object.keys(Prod))
console.log('Object.values(Prod): ' + Object.values(Prod))

console.log('Object.keys(ProdString): ' + Object.keys(ProdString))
console.log('Object.values(ProdString): ' + Object.values(ProdString))

const enum ProdConst {Hat, Glov, Umb};

const x2: ProdConst = ProdConst.Hat;


type FirstType = {x?: number, y: number};
type SecondType = {z?: number, y: number};

const typeList: (FirstType | SecondType)[] = [{x: 1, y: 2}, {z: 1, y: 2}, {y: 2}];
typeList.forEach(element => {
    if ('z' in element) { 
        console.log(element.z);  
    } else if ('x' in element) {
        console.log(element.x);
    } else {
        console.log(element.y);
    }
});



/*
Very strange output for numbers:
Hat
Gloves
Umbrella
0
1
2

But rather clear for strings:

*/