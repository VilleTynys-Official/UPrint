const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT | 5000;

//MIDDLEWARE
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  console.log();
  res.status(200).json({ msg: 'server is running' });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
