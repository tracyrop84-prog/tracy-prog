function areaCircle(r) {
  return 3.142 * r * r;
}

let age = 23;
let samAge = age;
let ac = areaCircle;
ac(10);
console.log(samAge);

console.log(`value of ac is ${ac} its typeof is ${typeof ac}`);

let g = function () {
  console.log(`hello`);
};

g();

function currentTime() {
  const now = new Date();
  alert(`the current time is` + now.toLocaleTimeString());
}
currentTime();
