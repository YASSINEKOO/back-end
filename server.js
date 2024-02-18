import express from 'express';
import bodyParser from 'body-parser';
//const express = require('express');
//const bodyParser = require('body-parser');
import productsRouter from './routers/productsRouter.js';
import usersRouter from './routers/usersRouter.js';

import Rundb from './config.js';

// 
// mongoose
//   .connect(MONGO_URL)
//   .then(() => console.log("🚀 ~ MONGO db connected:"))
//   .catch((err) => console.log("🚀 ~ err:", err));

Rundb().catch(console.dir);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);


app.get('/', (req, res) => {
  // Handle API logic here
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
