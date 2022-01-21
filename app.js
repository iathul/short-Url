require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Datebase Connection
connectDB();

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extented: false }));

// Routes
//app.use('/', require('./routes/index'));
app.use('/', require('./routes/url'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
