let grade = prompt("enter your grade:");
alert(`you entered${grade}`);

if (grade >= 90) {
  alert("Excellent!");
}
if (grade >= 80 && grade < 90) {
  alert("Very Good!");
}
if (grade >= 70 && grade < 80) {
  alert("Good!");
}
if (grade >= 60 && grade < 70) {
  alert("fair!");
}
if (grade >= 50 && grade < 60) {
  alert("fail!");
}
