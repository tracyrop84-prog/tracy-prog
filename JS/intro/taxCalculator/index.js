let grossMonthlySalary = null;
while (true) {
  let gross = prompt("Enter your gross salary");
  if (!isNaN(gross)) {
    gross = Number(gross);
    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }
  alert(`Invalid amount entered
        Ensure you enter a number greater than 0`);
}
console.log(
  `Gross salary is ${grossMonthlySalary} and its type is ${typeof grossMonthlySalary}`,
);
//calculate Paye
let payRate = null;
let tier = null;
if (grossMonthlySalary > 0 && grossMonthlySalary <= 24000) {
  paye = grossMonthlySalary * 0.1;
  tier = "0-24000 KES";
}
if ((grossMonthlySalary > 24001 && grossMonthlySalary <= 32, 333)) {
  paye = grossMonthlySalary * 0.25;
  tier = "24001-32333 KES";
}
if (grossMonthlySalary > 32334 && grossMonthlySalary <= 500000) {
  paye = grossMonthlySalary * 0.3;
  tier = "32334-500000 KES";
}
if (grossMonthlySalary > 500001 && grossMonthlySalary <= 800000) {
  paye = grossMonthlySalary * 0.325;
  tier = "500001-800000 KES";
}
if (grossMonthlySalary > 800001) {
  paye = grossMonthlySalary * 0.35;
  tier = "800000-infinity KES";
}
alert(`paye is ${paye} and tier level is ${tier}`);
