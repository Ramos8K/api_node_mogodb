const express = require(`express`);
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 3000;

const Film = mongoose.model('Film', { 
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
});

app.get('/', async (req, res) => {
    const films = await Film.find();
    res.send(films);
});

app.post("/", async (req, res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    })
    
    await film.save();
    res.send(film);
});

app.listen(port, () => {
    mongoose.connect('mongodb+srv://gabrieldev:8283@stawars-api.nkhbds4.mongodb.net/?retryWrites=true&w=majority&appName=stawars-api');
    console.log('App running');
});

