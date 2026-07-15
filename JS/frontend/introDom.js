const div1 = document.getElementById("div1");
console.log(div1);
const listItem = document.getElementsByClassName("List-item");
console.log(listItem);
const useQuiry = document.querySelector("#div1");
console.log(useQuiry);
const quiryAll = document.querySelectorAll(".List-item");
console.log(quiryAll);

for (let i = 0; i < quiryAll.length; i++) {
  console.log(quiryAll[i]);
}

const otherFruits = ["mango", "orange", "banana"];
const originalDiv = document.querySelector("#div1").innerHTML;
function original() {
  console.log("original clicked");
  document.querySelector("#div1").innerHTML = originalDiv;
}
function replace() {
  console.log("replace clicked");
  const newHtml = `
     <h3>List of chores</h3>
      <ul>
        <li class="List-item">Clean kitchen</li>
        <li class="List-item">clean bathroom</li>
        <li class="List-item">wash cloths</li>
      </ul>
  `;
  document.querySelector("#div1").innerHTML = newHtml;
}
function update() {
  console.log("update clicked");
  for (let i = 0; i < quiryAll.length; i++) {
    
  console.log(quiryAll[i]);
}
}
