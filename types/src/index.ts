function calculateTax(amount: number, format: boolean): string | number | null { 
    if (amount === 0) {
        return null;
    }
    
    return format ? `$${(amount * 1.2).toFixed(2)}` : amount;
}

let price = 100;
let taxAmount: unknown = calculateTax(price, true);
let halfAmount = taxAmount as number;


let newResult: any = calculateTax(100, true);
let failedValue: number = newResult; // no compilation error here, but we assigned type number to type string

// console.log('Failed value ' + failedValue.toFixed(2));  // compilation error
console.log('Failed value ' + 
Number(failedValue).toFixed(2));  // no errors, but value is NaN - cannor convert $120.00 to Number


console.log(taxAmount);
console.log(halfAmount);

// null as part of string | null
let nullable: unknown = calculateTax(0, true);

// We have an error on runtime only if we use "strictNullChecks": true
//  Error "Type 'null' is not assignable to type 'string | number'."
let myNumber = nullable as number; 
console.log('Failed null value ' + 
myNumber.toFixed(2)); // no error for compiler, but error on runtime: Cannot read property 'toFixed' of null


// Unknow and type guard

type SomeType = {s: number};
const x: unknown = {s: 1};
// console.log(x.s);
assertXisSomeType(x);
console.log(x.s);



function assertXisSomeType(x: unknown): asserts x is SomeType {
    if(typeof x !== 'object' || !(x as SomeType).s) {
        throw Error('Wrong type');
    }
}

// Non-Null Assertion and 'Never' usage

let taxValueNotNull = calculateTax