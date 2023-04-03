// file for performing operations on database for testing purposes
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB Connection Successful!")
})
.catch((error) => {
    console.log(error);
});

const Card = require('./models/card');

const addCards = async () => {
    const card = await Card.create({
        name: "Monkey D. Luffy",
        cardSetName: "East Blue Saga",
        attack: 9999,
        defense: 9999,
        hp: 9999
    });
    console.log(card);
} 

addCards();