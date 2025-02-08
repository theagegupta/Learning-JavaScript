// JavaScipt arrays are resizable
let myArr = [2,3,5,3,6,8,21];
let myArr2 = myArr;
myArr2[1] = "hello";
console.log(myArr);
console.log(myArr2);

// array methods

myArr.push(100);
myArr.pop();
myArr.unshift(0);
myArr.shift();
console.log("find"+myArr.indexOf(8));
console.log("Includes: "+myArr.includes(21));
console.log(myArr.splice(0,3,5,3,5));  // removes a given count of numbers and can also add new num at their place
console.log(myArr);


//playing with copies
let obj1 = {name:"ayush", age:"21"};
let obj2 = obj1;
obj2.name = "Jai";
console.log(obj1.name);
let obj3 = {name:"ayush",age:"21"};
obj3.name = "arpit"
console.log(obj3.name);

// map, filter, reduce in js
let a = [12,34,5,21,73,67,42,33];
console.log("Using Map Method");
console.log(a.map(a=>a/2));
console.log(`Using filter method: ${a.filter(a=>a%2!=0)}`);
console.log(`Using reduce method: ${a.reduce((acc,a)=>acc+a)}`)

// using spread operator - es6 features
let arr = ['marvel','dc','ironman','flash','strange','wanda'];
let arr2 = ['spiderman','superman','hulk']
// console.log(arr.concat(arr2));  // concats two arrays and return a new array
// console.log(arr.concat(arr));
let newheros = [...arr,...arr2];
console.log(newheros);
console.log(newheros.toLocaleString().split(','))


obj1 = { a: 10, b: 20 };
obj2 = { ...obj1 };  // Shallow copy
obj2.a = 50;

console.log(obj1.a); // 10 (Unchanged)
console.log(obj2.a); // 50 (Changed)




