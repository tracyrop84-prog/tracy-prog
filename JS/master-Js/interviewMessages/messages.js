// Import data
const data = require("./data.json");
const fs = require("fs");

// Initialize output array
const output = [];

// Loop through each data point
for (let i = 0; i < data.length; i++) {
  const doc = data[i];

  // Destructure data
  const { first_name, last_name, email, gender, phone } = doc;

  // Determine title based on gender
  let title = "";
  if (gender === "Male") {
    title = "Sir";
  } else {
    title = "Madam";
  }

  // Construct the message
  const message = `Dear ${title} ${first_name} ${last_name}. We regret to inform you you will not procede in the next round of interviews.`;

  // Push the new object into the output array
  output.push({ first_name, last_name, email, gender, phone, message });
}

// Convert data to JSON string
const outputText = JSON.stringify(output, null, 2);

// Write the data to a file
fs.writeFile("output.json", outputText, (error) => {
  if (error) {
    console.error("Error writing file:", error);
  } else {
    console.log("Successfully saved output.json");
  }
});
