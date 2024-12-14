require('dotenv').config();
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
connectDB();

const userRoutes = require('./routes/user.routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', userRoutes);

module.exports = app;