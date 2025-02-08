// singleton
// Object.create  = creating object using constructor. Singleton is created here. It is on of a kind 
// const user = new Object(); - single ton object - same as an empty object
// object Literals

let JsUser = {
    1:"hello",
    3: 'this is an object',
};

console.log(Object.keys(JsUser))

// Object freezing - this will freeze an object and not more changes will me made it that
// Object.freeze(JsUser);
JsUser[1] = "user1";
JsUser[2] = "user2";  // will add a new key value pair in the object
// creating a function for our object

JsUser.greet = function()
{
    console.log(`Hii i am ${this[2]}`)
}
JsUser.greet();
console.log(JsUser);

// merging two objects
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {obj1,obj2}; // will not combine else there will be 2 obj nested in a single object
const obj4 = {...obj1, ...obj2};
console.log(typeof obj4)

// Array of objects
let array = [{Name:"A"},{Name:"B"},{Name:"C"},{}];
// now we have to get all the names from all the objects into a array

let names = array.map((x)=>x.Name);
console.log(names);

// objects.keys, object.values, object.entries
