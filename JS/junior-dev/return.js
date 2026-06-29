function sayMyName() {
  let firstName = "tracy";
  console.log(`first Name ${firstName}`);
  let secondName = "kiprop";
  console.log(`second name ${secondName}`);

  let fullName = `${firstName} ${secondName}`;
  console.log(`names are ${fullName}`);
  return `a student at moringa`;
}
let sayMyNameValue = sayMyName();

console.log(`function returned ${sayMyName()} ${typeof sayMyName()}`);
