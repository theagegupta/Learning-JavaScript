// fixing the type of a variable in js

let num = 13433;  // dynamic memory allocation 
console.log(num);
// we can also fix the datatype in js like - 
let n = new Number(432);
console.log(n);


// Printing precision value in javaScript
console.log(num.toFixed(2)); // will return the value till 2 significant terms
// another method - 
console.log(num.toPrecision(3)); // will contract the number into 3 digits

let price = 12000000;
console.log(price.toLocaleString(`en-IN`)); // returns a string representation of a number along with commas

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Math module
console.log(Math);
console.log(Math.floor(1.3));
console.log(Math.floor(-3.3));
console.log(Math.floor(0.0));

// MIN_Value and MAX_value are also there in JavaScript

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

console.log((12/43));
