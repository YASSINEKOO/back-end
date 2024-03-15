import express from 'express';
//const express = require('express');
//const bodyParser = require('body-parser');
import productsRouter from './routers/productsRouter.js';
import usersRouter from './routers/usersRouter.js';
import mongoose from 'mongoose';
import config from './config.js';


// import Rundb from './config.js';
// mongoose
//   .connect(MONGO_URL)
//   .then(() => console.log("🚀 ~ MONGO db connected:"))
//   .catch((err) => console.log("🚀 ~ err:", err));
// const Rundb = async()=> {
  
//   try {
//     await Client.connect();
//     await Client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     return Client;
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   } finally {
//     await Client.close();
//   }
// }
// const client = Rundb();

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');

    // Ping the MongoDB deployment
    mongoose.connection.db
      .admin()
      .command({ ping: 1 })
      .then(() => {
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
      })
      .catch((error) => {
        console.error('Error pinging MongoDB deployment:', error);
      });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);


app.get('/', (req, res) => {
  // Handle API logic here
  res.json({ message: 'Hello from the server!' });
});

app.listen(config.port, () => {
  console.log(`Server is running on port http://localhost:${config.port}`);
});

// // Create a Mongoose model (schema) for your collection
// const userSchema = new mongoose.Schema({
//   // Define your schema fields here
//   // Example: name: String,
// });

// // Create a Mongoose model based on the schema
// const User = mongoose.model('User', userSchema);

// // Create a new instance of the model
// const user = new User();

// // Save the instance to create the collection
// await user.save();

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// app.post('/createCollection', (req, res) => {
//   // You can perform actions related to your collection here
//   res.status(200).send('Collection created or handled successfully');
// });
// });
