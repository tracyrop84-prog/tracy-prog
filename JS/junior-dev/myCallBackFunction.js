//Area of a rectangle l*w
function areaRectangle(l, w) {
  return l * w;
}
areaRectangle();
console.log(areaRectangle(2, 5));

//area if a triangle 1/2*b*h
const areaTriangle = (b, h) => {
  return (1 / 2) * b * h;
};
areaTriangle();
console.log(areaTriangle(20, 10));

//area of a circle 3.142*r*r
const areaCircle = (r) => {
  return 3.142 * r * r;
};
areaCircle();
console.log(areaCircle(10));

function shape(shapeFunction, shapeName, side1, side2, side3) {
  console.log(`shapeFunction ${shapeFunction} its a ${typeof shapeFunction}`);
  console.log(`shapeName ${shapeName} its a ${typeof shapeName}`);
  console.log(`side1 ${side1} its a ${typeof side1}`);
  console.log(`side2 ${side2} its a ${typeof side2}`);
  console.log(`side3 ${side3} its a ${typeof side3}`);
  const result = shapeFunction(side1, side2, side3);
  console.log(`for shape ${shapeName} area is ${result}`);
  return result;
}
shape(areaCircle, "areaCircle", 10);
shape(areaTriangle, "areaTriangle", 10, 20);
shape(areaRectangle, "areaRectangle", 10, 20);
