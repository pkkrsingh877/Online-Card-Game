const mongoose = require('mongoose');
//create schema
const cardSchema = new mongoose.Schema({
    cardSetName: {
        type: String,
        required: [true, "Please, Enter the cardSetName"]
    },
    name: {
        type: String,
        required: [true, "Please, Enter the name"],
        unique: [true, "The name can not be the same"]
    },
    attack: {
        type: Number,
        required: [true, "Please, Enter the attack"]
    },
    hp: {
        type: Number,
        required: [true, "Please, Enter the hp"]
    },
    defense: {
        type: Number,
        required: [true, "Please, Enter the defense"]
    },
    createdAt: {
        type: Date
    },
    modifiedAt: {
        type: Date
    }
});
//create model
const Card = new mongoose.model('Card', cardSchema);
module.exports = Card;