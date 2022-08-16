// import mongoose from 'mongoose';
const mongoose = require('mongoose');
// await import('./index.js')
mongoose.connect('mongodb://localhost:27017/MovieApp')
.catch(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh No! Error!")
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
}, {strict: false});

const Movie = mongoose.model('Movie', movieSchema);

const Amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

Movie.insertMany([
        { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
        { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
        { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
        { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
        { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
    ])
    .then(data => {
        console.log("Hallelujah")
        console.log(data);
    })