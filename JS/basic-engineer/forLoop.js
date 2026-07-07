//using whileloop to make forloop
function userInput() {
  let number1 = Number(prompt(` Enter Number1`));

  while (isNaN(number1) || number1 <= 1) {
    alert(`Invalid number`);
    number1 = Number(prompt(` Enter Number`));
  }
  console.log(`number1: ${number1}`);

  let number2 = Number(prompt(` Enter Number2`));

  while (isNaN(number2) || number2 <= 1) {
    alert(`Invalid number`);
    number2 = Number(prompt(` Enter Number`));
  }
  console.log(`number2: ${number2}`);
  mathTable(number1, number2);
}

function mathTable(number1, number2) {
  if (isNaN(number1) || number1 <= 1 || isNaN(number2) || number2 <= 1) {
    console.error("put numbers greater than 1.");
    return;
  }

  for (let i = number1; i >= 1; i--) {
    for (let j = number2; j >= 1; j--) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

userInput();
