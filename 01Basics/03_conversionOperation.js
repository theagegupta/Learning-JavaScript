let score = "33abc";
let value = null

console.log("Value in string is:"+score)

console.log(typeof score)
console.log(typeof(score)) // typeof can be used as datatype and a function as well

let ValueInInteger = Number(score);
let IntValue = Number(value)
console.log(ValueInInteger + " converting string to number")
console.log(IntValue + " converting null to number")
console.log(typeof ValueInInteger)
console.log(typeof IntValue)
console.log(IntValue)
console.log(Number(undefined))
console.log(Number(false))
console.log(Boolean(null))
let str = String(34522);
console.log(typeof str);
console.log(Boolean(10))
console.log(Boolean(-10))
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean())
console.log(Number(null))
console.log(Number(undefined))

// console.log(Boolean(null))
// console.log(Boolean(undefined))


// NaN is a special data type in js which means not a number. when we try to convert a string into no. we get NaN
/*
null is converted to 0 in integer
false => 0
true => 1
Boolean => +ve or -ve value = true, empty string =>false, 
*/