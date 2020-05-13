function x(y, z) {
    return y*z; // skipped
}

function x(y) {
    console.log(arguments);
    return y; 
}

console.log(x(1));
console.log(x(1,2));