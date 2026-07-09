//key=string or number
//value any other data types,functions

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
console.log(car);
