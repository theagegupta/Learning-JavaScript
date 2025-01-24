let score = "33abc";
let value = null

console.log("Value in string is:"+score)

console.log(typeof score)
console.log(typeof(score))

let ValueInInteger = Number(score);
let IntValue = Number(value)
console.log(ValueInInteger)
console.log(typeof ValueInInteger)
console.log(typeof IntValue)
console.log(IntValue)
console.log(Number(undefined))
console.log(Number(false))
console.log(Boolean(null))
let str = String(34522);
console.log(typeof str);

// NaN is a special data type in js which means not a number. when we try to convert a string into no. we get NaN
/*
null is converted to 0 in integer
false => 0
true => 1
Boolean => +ve or -ve value = true, empty string =>false, 
*/