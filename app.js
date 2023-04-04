const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override')
const morgan = require('morgan');
const ejsMate = require('ejs-mate');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const Card = require("./models/card");

//middleware (order matters )
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(cookieParser());

//setting up mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB Connection Successful!")
})
.catch((error) => {
    console.log(error);
});

//setting up ejs
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.patch('/card/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, cardSetName, attack, defense, hp } = req.body;
        const card = await Card.findByIdAndUpdate(id,{
            name, cardSetName, attack, defense, hp
        });
        console.log(card);
        res.redirect('/card');
    }catch(err){
        console.log(err);
        res.redirect('/card');
    }
})

app.post('/card', async (req, res) => {
    try {
        console.log("Hitting the correct request")
        const { name, cardSetName, attack, defense, hp } = req.body;
        const card = await Card.create({
            name, cardSetName, attack, defense, hp
        });
        console.log(card);
        res.redirect('/cardAdd');
    }catch(err){
        console.log(err);
        res.redirect('/cardAdd');
    }
});

app.get('/cardAdd', (req, res) => {
    res.render('cards/cardAdd.ejs');
});

app.get('/card', async (req, res) => {
    const cards = await Card.find({cardSetName: "East Blue Saga"});
    console.log(cards);
    res.render('cards/cards', { cards });
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log('App listening at port', port);
});
