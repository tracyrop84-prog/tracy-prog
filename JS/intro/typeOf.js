let numb1=500;
console.log("numb1",numb1 ,"its type is",typeof numb1);

let strNumb="678";
console.log("678",strNumb,"its type is",typeof strNumb);

let myName="john";
console.log("myName",myName,"its type is",typeof myName);

let isMarried=true;
console.log("isMarried",isMarried,"its type is",typeof isMarried);


let nullVal=null;
console.log("nullVal",nullVal,"its type is",typeof nullVal);


let unValue;
console.log("unvalue",unValue,"its type is",typeof unValue);

const bonus="200";
const sallary=50000;


const sallaryGross=bonus +sallary;
console.log("gross salary is",sallaryGross,"its type", typeof sallaryGross);

const paye=sallaryGross*0.16;
console.log("for gross salary of",sallaryGross,"paye is",paye)

const nhif=2500;
console.log("Nhif deductions",nhif)

const sha=2500;
console.log("sha is", sha);

const totalDeductions=paye+nhif+sha;
console.log("the total deductions are",totalDeductions);

const netSalary=sallaryGross-totalDeductions;
console.log("your net salary is",netSalary);