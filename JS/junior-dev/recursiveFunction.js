//function that calls itsef
//since it creates an endless loop you have to create a way to terminateit
/*
i.its recursion problem
2entering gross salary is repeated
3 if conditions stops
4 if gross is= number stop else ask again untill number is gotten
5 when input is invalid alert for invalid is diplayed
*/
function salaryGrossPrompt() {
  let gross = prompt(`enter your gross salary`);

  if (!isNaN(gross)) {
    console.log(`Gross salary entered: ${gross}
Exiting program...`);
  } else {
    alert(`Invalid gross salary. Please enter a number.`);
    salaryGrossPrompt();
  }
}

salaryGrossPrompt();
/*
function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  }

  return 1;
}

console.log(factorial(5));
*/
