let name = "sara"; //global scope
function sayMyName() {
  // function block scope
  let name = "ethan";

  if (true) {
    //if block scope
    let name = "julie";
  }
  console.log(`name : ${name} line : 6`);
}
sayMyName();
