let mydate = new Date;  // date is a object and here we are creating 
// an instance of date object which is mydate
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());

// we can even create and declare our own date. 

let myCreatedDate = new Date(1970,0,1,0);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

console.log(Date.now());  // returns the timestamp which is basically
// the time in milisec since it's being calculated

console.log(myCreatedDate.getTime());


// to get the value in seconds just multiply it by 1000
console.log(mydate.getTime());
// Date.toLocaleDateString()


