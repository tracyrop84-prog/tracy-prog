/*console.log---debugging by printing out info on screen
console.log ensure you write your consoles in such a way that they help you figure out the issue

lets calculate the net salary--excersise*/

const sallaryGross=50000;
console.log("gross salary is",sallaryGross);

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