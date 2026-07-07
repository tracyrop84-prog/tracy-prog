/*let n = 0;
let condition = true;
while (condition) {
  console.log(`n is,${n}`);
  n = n + 1;
  if (n > 5) {
    condition = false;
  }
}

//even number
let n = 2;
let condition = true;
while (condition) {
  console.log(n);
  n = n + 2;
  if (n > 20) {
    condition = false;
  }
}
  
let n = 10;
function date(n) {
  while (n <= 10) {
    console.log(`n: ${n}`);
    n = n - 1;
    if (n < 0) {
      break;
    }
  }
}
date(n);
*/

function userInput() {
  let number1 = Number(prompt("Enter Number1"));

  while (isNaN(number1) || number1 <= 1) {
    alert("Invalid number");
    number1 = Number(prompt("Enter Number1"));
  }

  let number2 = Number(prompt("Enter Number2"));

  while (isNaN(number2) || number2 <= 1) {
    alert("Invalid number");
    number2 = Number(prompt("Enter Number2"));
  }

  mathTable(number1, number2);
}

function mathTable(number1, number2) {
  if (isNaN(number1) || number1 <= 1 || isNaN(number2) || number2 <= 1) {
    console.error("Ensure number1 and number2 are numbers greater than 1");
    return;
  }

  let outerLoop = number1;

  while (outerLoop > 0) {
    doInnerLoop(outerLoop, number2);
    outerLoop--;
  }
}

function doInnerLoop(outerLoop, number2) {
  let innerLoop = number2;

  while (innerLoop > 0) {
    console.log(`${outerLoop}${innerLoop} = ${outerLoop * innerLoop}`);
    innerLoop--;
  }
}

userInput();
