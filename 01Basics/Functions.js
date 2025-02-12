function add(a, b)
{
    return a+b;                              // normal function
}

console.log(add(20,32));

// arrow functions

const multiply = (a,b) => a*b;   // single line arrow function 
console.log(multiply(20,3));

const square = a=> a*a;         // single parameter arrow function
console.log(square(10));

const sum = (a,b)=>{
    let add = a+b;
    return add;
};

console.log(sum(19,34));        // multiple parameter arrow function 
const greet = () => console.log("I am learning JS");
greet();                        // arrow function without a parameter


// arrow function has easy syntx for single liner fxns than regular fxns
// arrow fxns does not bind this keyword , regular fxns bind this keyword . this keyword refers to the current object whose fxn we are calling

let obj = {
    name:"Ayush",
    demofxn : function (){
        console.log(`Hello i am ${this.name}`);
    },
};

obj.demofxn();


let obj2 = 
{
    name :"Ayush",
    demofxn : ()=>console.log(`Hello my name is ${this.name}`),   // this.name will give undefined
};

obj2.demofxn();


// avoid this type of conversions - they create confusion
console.log(null>0); // gives false because null is converted to number(0) and 0!>0
console.log(null==0); // null is not converted. Null != 0
console.log(null<=0); // gives true bcz 0==0\

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);

// string equality ===

// treating functions as variables

const msg = function(){              // function as a variable
    console.log("Hello world");
}

msg();
