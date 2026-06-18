let firstName="tracy";
let secondName="rop";
let age=23;
let address="nairobi";

let userDetails=firstName+" "+secondName+" is "+age+" years old"+" she stays at "+address;
console.log(userDetails)
console.log("userdetails is",typeof userDetails)

//template string- uses backticks
let userDetails2=
`${firstName} ${secondName} is ${age} years old and she stays at ${address}`;
console.log(userDetails2);