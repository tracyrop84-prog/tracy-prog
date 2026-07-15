document.getElementById("form1").addEventListener("submit", submitForm);

document.getElementById("form1input1").addEventListener("input", (e) => {
  console.log(e.target.value);
});

function submitForm(e) {
  e.preventDefault();
  const inputList = document.querySelector("#form1").querySelectorAll("input");

  const input1 = inputList[0];
  const input2 = inputList[1];
  console.log("input1", input1.value);
  console.log("input2", input2.value);
  console.log(" f1 input1", document.getElementById("form1input1").value);
  console.log(" f1 input2", document.getElementById("form1input2").value);
  input1.value = "cats and dogs";
}
