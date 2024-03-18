const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/array', (req, res) => {
  const inputArray = req.body.array;
  const userId = req.body.userId;
  const emailId = req.body.emailId;
  const collegeRollNumber = req.body.collegeRollNumber;

  const status = 'success';
  const evenNumbers = inputArray.filter(num => num % 2 === 0);
  const oddNumbers = inputArray.filter(num => num % 2 !== 0);
  const alphabets = inputArray.filter(item => typeof item === 'string').map(item => item.toUpperCase());

  res.json({
    status,
    userId,
    emailId,
    collegeRollNumber,
    evenNumbers,
    oddNumbers,
    alphabets
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
