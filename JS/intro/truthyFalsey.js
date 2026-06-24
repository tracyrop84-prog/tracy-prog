/*
if something is not falsey then it is truthy
examples of falset
-false
-0
- -0
- null
- undefined
- empty sting
Nan


*/


let userName1="john mwangi" //truthy
let userName2=0 //falsey

let activeUserName=userName2||userName1

console.log(activeUserName)

let bothUserNameOk=userName1&&userName2
console.log(bothUserNameOk)