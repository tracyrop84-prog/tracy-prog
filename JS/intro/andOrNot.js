let val1=true;
let val2=false;
let result =val1&&val2;
console.log(result)

let maryAge=19;
let maryBalance=30000;

let isGreaterThan18=maryAge>18;
console.log(`is mary age greater than 18 ${isGreaterThan18}`);

let hasMoreThan20K=maryBalance>20000;
console.log(`mary has more than 20k ${hasMoreThan20K}`);
console.log(`mary age is greater than 18 and has more tha 20k in her account ${isGreaterThan18&&hasMoreThan20K}`);

//simplified

let simplified=maryAge>18&&maryBalance>20000;
console.log(`simplified ,${simplified}`);
console.log(`further simplification is ${maryAge>18&&maryBalance>20000}`)
//or 
console.log(`mary age is greater than 18 or has more tha 20k in her account ${isGreaterThan18||hasMoreThan20K}`);

//not
console.log(`this is not true = ${!true}`)
console.log(`this is not false= ${!false}`)

//order of presidence evaluate first not then and then or
// for && and || work with truthy and falsey