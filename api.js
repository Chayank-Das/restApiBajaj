const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/array", (req, res) => {
  const inputArray = req.body.inputArray;

  const status = "success";
  const userId = inputArray[0];

  const emailId = inputArray[1];

  const collegeRollNumber = inputArray[2];

  const evenNumbers = inputArray.filter(num => num % 2 === 0);

  const oddNumbers = inputArray.filter(num => num % 2 !== 0);

  const alphabets = inputArray.filter(char => char.match(/[a-z]/i));
  const uppercaseAlphabets = alphabets.map(char => char.toUpperCase());

  res.send({
    status,
    userId,
    emailId,
    collegeRollNumber,
    evenNumbers,
    oddNumbers,
    uppercaseAlphabets
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
