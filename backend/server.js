const express = require('express');

const app = express();
const PORT = process.env.PORT | 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
console.log('');

app.get('/', (req, res) => {
  console.log();
  res.status(200).json({ msg: 'this is a json' });
});
