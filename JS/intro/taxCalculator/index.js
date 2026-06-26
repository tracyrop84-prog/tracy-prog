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

//nssf
let nssfTier1 = 0;
let nssfTier2 = 0;
if (grossMonthlySalary <= 9000) {
  let nssfRate = 0.06;
  nssfTier1 = grossMonthlySalary * 0.06;
}
if (grossMonthlySalary > 9000 && grossMonthlySalary <= 108000) {
  nssfTier1 = 9000 * 0.06;
  nssfTier2 = (grossMonthlySalary - 9000) * 0.06;
}
if (grossMonthlySalary > 108000) {
  nssfTier1 = 9000 * 0.06;
  nssfTier2 = (108000 - 9000) * 0.06;
}
let nssf = nssfTier1 + nssfTier2;
let employerNssf = nssf;
//shif

let shifRate = 0.0275;
let shif = grossMonthlySalary * shifRate;

//housing levy
let housingLevyRate = 0.015;
let housingLevy = grossMonthlySalary * housingLevyRate;

//taxableIncome
let taxableIncome = grossMonthlySalary - nssf - shif - housingLevy;

//paye
let band1 = 0;
let band2 = 0;
let band3 = 0;
let band4 = 0;
let band5 = 0;

let tax = 0;
if (taxableIncome <= 24000) {
  band1 = taxableIncome * 0.1;
  tax = band1;
} else if (taxableIncome <= 32333) {
  band1 = 24000 * 0.1;
  band2 = (taxableIncome - 24000) * 0.25;
  tax = band1 + band2;
} else if (taxableIncome <= 500000) {
  band1 = 24000 * 0.1;
  band2 = 8333 * 0.25;
  band3 = (taxableIncome - 32333) * 0.3;
  tax = band1 + band2 + band3;
} else if (taxableIncome <= 800000) {
  band1 = 24000 * 0.1;
  band2 = 8333 * 0.25;
  band3 = (500000 - 32333) * 0.3;
  band4 = (taxableIncome - 500000) * 0.325;
  tax = band1 + band2 + band3 + band4;
} else {
  band1 = 24000 * 0.1;
  band2 = 8333 * 0.25;
  band3 = (500000 - 32333) * 0.3;
  band4 = (taxableIncome - 500000) * 0.325;
  band5 = (taxableIncome - 800000) * 0.35;
  tax = band1 + band2 + band3 + band4 + band5;
}
let personalRelief = 2400;
let paye = tax - personalRelief;
if (paye < 0) {
  paye = 0;
}

//net salary
let netSalary = grossMonthlySalary - shif - nssf - paye - housingLevy;
alert(`for gross income of ${grossMonthlySalary} 
  nssf is ${nssf}
   taxable income is ${taxableIncome}
  paye is ${paye}
   shif is ${shif}
   housing levy is ${housingLevy}
    net salary is ${netSalary}`);
