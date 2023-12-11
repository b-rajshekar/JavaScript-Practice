/*

Here are some general guidelines for choosing which keyword to use:

--> Use let for most variables that you want to be able to change within a block.
--> Use const for variables that you don't want to change, such as constants and global configurations.
--> Avoid using var unless you have a good reason to do so.

--> Prefer not to use var
because of issue in block scope and functional scope

*/

const accountId = 112233
let accountEmail = "raju@gmail.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

//accountId = 2 //not allowed

accountEmail = "rohit@gmail.com"
accountPassword = "4321"
accountCity = "Chennai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])