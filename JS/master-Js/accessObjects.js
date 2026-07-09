const car = {
  name: "Mazda",
  model: "MX-5 Miata",
  topSpeed: "220km/hr",
  engineInformation: {
    cylinder: "4",
    number: "2.0 litres",
  },
  manufacture: {
    name: "Mazda Motor Corporation",
    country: "Japan",
    2024: "year manufactured",
  },
  carInformation: function () {
    alert(`car:${car.name}
        model:${car.model}
    topSpeed:${car.topSpeed}`);
  },
  "fun fact": `its known for it "jinba ittai" philosophy,which means"horse and rider as one"`,
  isItClassic: true,
};
/*
console.log(`car datatype ${typeof car}`);
console.log(car);
console.table(car);
*/
//access individual parts of your object
// 1 dot notation-does not work for everthing-cant access numbers,strings with spaces,starting with number or special symboles *can only access properties follow variable naming rules
//2 bracket notation-work for everything(access properties using variables)

console.log(`Name is ${car.name} its type is ${typeof car.name}`);
console.log(`name is ${car["name"]} its type is ${typeof car["name"]}`);

console.log(`Name is ${car.model} its type is ${typeof car.model}`);
console.log(`name is ${car["model"]} its type is ${typeof car["model"]}`);

console.log(`Name is ${car.topSpeed} its type is ${typeof car.topSpeed}`);
console.log(`name is ${car["topSpeed"]} its type is ${typeof car["topSpeed"]}`);

console.log(
  `Name is ${car.engineInformation.cylinder} its type is ${typeof car.engineInformation.cylinder}`,
);
console.log(
  `name is ${car["engineInformation"]["cylinder"]} its type is ${typeof car["engineInformation"]["cylinder"]}`,
);

console.log(
  `Name is ${car.engineInformation.number} its type is ${typeof car.engineInformation.number}`,
);
console.log(
  `name is ${car["engineInformation"]["number"]} its type is ${typeof car["engineInformation"]["number"]}`,
);

console.log(
  `Name is ${car.manufacture.name} its type is ${typeof car.manufacture.name}`,
);
console.log(
  `name is ${car["manufacture"]["name"]} its type is ${typeof car["manufacture"]["name"]}`,
);

console.log(
  `Name is ${car.manufacture.country} its type is ${typeof car.manufacture.country}`,
);
console.log(
  `name is ${car["manufacture"]["country"]} its type is ${typeof car["manufacture"]["country"]}`,
);

console.log(
  `Name is ${car.carInformation} its type is ${typeof car.carInformation}`,
);
console.log(
  `name is ${car["carInformation"]} its type is ${typeof car["carInformation"]}`,
);

// dot notation does not work if key is no.
console.log(
  `name is ${car["manufacture"]["2024"]} its type is ${typeof car["manufacture"]["2024"]}`,
);

// dot notation does not work with spaces
let funFact = "fun fact";
console.log(`name is ${car.funFact} its type is ${car.funFact}`);
console.log(`name is ${car["fun fact"]} its type is ${typeof car["fun fact"]}`);

console.log(`Name is ${car.isItClassic} its type is ${typeof car.isItClassic}`);
console.log(
  `name is ${car["isItClassic"]} its type is ${typeof car["isItClassic"]}`,
);
