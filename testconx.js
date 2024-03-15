import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

const uri = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB Atlas using Mongoose');

  const PeopleSchema = new mongoose.Schema({
    name: {
      first: String,
      last: String,
    },
    birth: Date,
    death: Date,
    contribs: [String],
    views: Number,
  });

  // Create a Mongoose model based on the schema
  const PeopleModel = mongoose.model('People', PeopleSchema);

  try {
    // Create new documents using Mongoose model
    const peopleDocuments = [
      {
        name: { first: 'Alaan', last: 'Turing' },
        birth: new Date(1912, 5, 23),
        death: new Date(1954, 5, 7),
        contribs: ['Turing machine', 'Turing test', 'Turingery'],
        views: 1250000,
      },
      {
        name: { first: 'Grace', last: 'Hopper' },
        birth: new Date(1906, 12, 9),
        death: new Date(1992, 1, 1),
        contribs: ['Mark I', 'UNIVAC', 'COBOL'],
        views: 3860000,
      },
    ];

    // Insert the documents into MongoDB using Mongoose model
    const insertedPeople = await PeopleModel.insertMany(peopleDocuments);

    // Find the document using Mongoose model
    const turingDocument = await PeopleModel.findOne({ 'name.last': 'Turing' });

    // Print results
    console.log('Document found:\n', turingDocument);
  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close Mongoose connection
    await mongoose.connection.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
