// 2 types of data types primitive and non - primitive based upon their implementation in memory
// Note : null means empty

// Primitive data types are call by value. - string, number, boolean, null, undefined, symbol(used to make a value unique) - in frontend we use 1 component many times and if you want to 
// make a component unique then we wrap it up into a symbol., BigInt

//  Reference data types or Non-primitive data types = arrays, functions, objects

// js is a dynamically typed language

let num = 4234141234132432432293578492598475n;         // to make a value in bigint we can use 'n' after it
console.log(typeof num);

let val = Symbol("123");
let val2 = Symbol("123");
// symbol data type makes a value unique 
// for example : 
console.log(val==val2);
console.log(val===val2);

