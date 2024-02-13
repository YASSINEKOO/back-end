import express from 'express';
import bodyParser from 'body-parser';
//const express = require('express');
//const bodyParser = require('body-parser');
import usersRouter from './routers/users.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("🚀 ~ MONGO db connected:"))
  .catch((err) => console.log("🚀 ~ err:", err));


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', usersRouter);

app.get('/', (req, res) => {
  // Handle API logic here
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
