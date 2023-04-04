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

let name = ["Monkey D. Luffy","Roronova Zoro","Nami","Ussop","Sanji","Coby","Helmeppo","Morgan","Rika","Ririka","Shimotsuki Koushiro","Shimotsuki Kuina","Yassop","Kaya","Kuro","Zeff","Patty","Carne","Mayor Boodle","Chouchou","Bellmere","Nojiko","Genzo","Arlong","Hachi","Kurobi","Shou","Smoker","Tashigi","Shanks","Luckey Roux","Ben Beckman","Makino","Woop Slap","Higuna","Monkey D. Dragon","Lord of the Coast","Gaimon","Buggy","Mouji","Ricky","Alvida","Cabbaji","Ninjin","Piiman","Tamanegi","Gol D. Roger","Daddy Masterson","Carol Masterson","Johnny","Yosaku","Don Kreig","Pearl"]

let addCards = async (i) => {
    let card = await Card.create({
        name: name[i],
        cardSetName: "East Blue Saga",
        attack: Math.floor(Math.random() * 9999),
        defense: Math.floor(Math.random() * 9999),
        hp: Math.floor(Math.random() * 9999)
    });
    console.log(card);
} 

for(let i = 0; i < name.length; i++){
    addCards(i);
}

