//we exit if else if when we reach the fisrt truth

let grade = prompt("enter your grade:");
console.log(`grade is ${grade} typeof ${typeof grade}`);
alert(`you entered${grade}`);

if (grade < 50) {
  alert("fail!");
} else if (grade < 60) {
  alert("fair!");
} else if (grade > 70) {
  alert("Good!");
} else if (grade > 80) {
  alert("Very Good!");
} else if (grade > 90) {
  alert("Excellent!");
}
