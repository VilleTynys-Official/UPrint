const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT | 5000;

//CONNECT TO DATABASE
connectDB();

//MIDDLEWARE
app.use(express.json({ extended: false })); //parser
app.use('/api', apiRoutes); //routes

app.get('/', (req, res) => {
  console.log();
  res.status(200).json({ msg: 'server is running' });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
