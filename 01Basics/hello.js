const account_Id = 100; // cannot be changed
let accountEmail = 'hitesh@google.com';
var password = "12345";

/* 
Note: Prefer not to use var in js 
*/

let accountCity = "Jaipur";
let accountState;

// account_Id = 2;   will through error
console.log(account_Id);
console.table([account_Id, accountEmail, accountCity, password, accountState]);
console.log("19">"52");
let value = true;
value &&= true;
console.log(value);
console.table([value,"hello"]);