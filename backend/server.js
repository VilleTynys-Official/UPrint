const express = require('express');
const connectDB = require('./config/db');
const app = express();
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT | 5000;

//CONNECT TO DATABASE
connectDB();

//MIDDLEWARE
app.use(express.json({ extended: false })); //parser

//ROUTES
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);

app.get('/', (req, res) => {
  console.log();
  res.status(200).json({ msg: 'server is running' });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
