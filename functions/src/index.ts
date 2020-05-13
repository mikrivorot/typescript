function calcAmount(x: number, someNUll: number | null, y: number = 0, ...restPArams: number[]) {
    if (someNUll !== null) {
        return x + y + restPArams.reduce((total, val) => total + val, 0);
    } else {
        return undefined; // due to flag "noImplicitReturns": true
    }
}

function toOverloadTypes (x: number): number;
function toOverloadTypes (x: null): null;
function toOverloadTypes (x: number | null): number | null {
    return x ? x : null;
}


console.log('one param: ' + calcAmount(1, null));
console.log('rest param: ' + calcAmount(1,2,1,2,3));
// console.log('null param: ' + calcAmount(null,2)); // it is possible only with "strictNullChecks": false

const isNull = toOverloadTypes(null);
const isNumber = toOverloadTypes(1);

// next line is possible without null-check only if we have types ovarloading for toOverloadTypes function
console.log(`number without checks ${isNumber + 1}`);
