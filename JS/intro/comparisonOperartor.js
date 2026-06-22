//comparison operators eval true/false only
//always use strict equality === and strict inequality !==

let numb1=23
let numb2="23";

let strictEqual=numb1===numb2
console.log(`numb1=${numb1}===numb2=${numb2} Ans ${strictEqual} its type is${typeof strictEqual}`);

let nonStrictEquality=numb1==numb2;
console.log(`numb1=${numb1}==numb2=${numb2} Ans ${nonStrictEquality} its type is${typeof nonStrictEquality}`);

let val1=30
let val2="what"
let strictInequality=val1!==val2;
console.log(`val1=${val1}!==val2=${val2} Ans ${strictInequality} its type is${typeof strictInequality}`);

let inEquality=val1!=val2;
console.log(`val1=${val1}!==val2=${val2} Ans ${inEquality} its type is${typeof inEquality}`);

let numb3=20;
let numb4=10;

let str1="A";
let str2="b";


console.log(`numb3=${numb3} and numb4 = ${numb4}`);
console.log(`str1= ${str1} and str2 = ${str2}`)

console.log(`numb3>numb4 ${numb3>numb4}`);
console.log(`str2>str1 ${str2>str1}`);

console.log(`numb3>=numb4 ${numb3>=numb4}`);
console.log(`str2>=str1 ${str2>=str1 }`);

console.log(`numb3<numb4 ${numb3<numb4}`);
console.log(`str2<str1 ${str2<str1 }`);

console.log(`numb3<=numb4 ${numb3<=numb4}`);
console.log(`str2<=str1 ${str2<=str1 }`);

