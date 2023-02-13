const mongoose = require('mongoose');
import * as dotenv from 'dotenv';
dotenv.config();

// this connects our mongo database to our server
mongoose
  .connect(process.env.MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'NeighborData',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// declare mongo schema for our consumers
// zip code will be a string since we don't need to work with numbers
const consumersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  zipCode: { type: String },
});

// export the module
module.exports = mongoose.model('consumers', consumersSchema);
