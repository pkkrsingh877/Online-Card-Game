// file for performing operations on database for testing purposes
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB Connection Successful!")
})
.catch((error) => {
    console.log(error);
});

const Card = require('./models/card');

const addCards = async () => {
} 

addCards();