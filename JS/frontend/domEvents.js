function clickAlert(e) {
  alert(`showing event`);
}
document
  .querySelector("#btn-event-checker")
  .addEventListener("click", clickAlert);

document.addEventListener("mouseover", (e) => {
  console.log(new Date());
});

const cordinates = document.querySelector("#cordinates");

window.addEventListener("mousemove", (e) => {
  cordinates.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});
