const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Devops World!');
});

app.get('/hello', (req, res) => {
  res.send('Hello, DevOps Engineers! Welcome to CI/CD Process.\n');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
