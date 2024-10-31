const trainerModel = require('../models/trainerModel');
const pokemonModel = require('../models/pokemonModel');

const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers();
    res.render('trainers', { trainers });
};

const showCreateForm = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('createTrainer', { pokemons });
};

const createTrainer = (req, res) => {
    const { nome, pokemons } = req.body;
    trainerModel.createTrainer(nome, pokemons);
    res.redirect('/trainers');
};

module.exports = { getAllTrainers, showCreateForm, createTrainer };
