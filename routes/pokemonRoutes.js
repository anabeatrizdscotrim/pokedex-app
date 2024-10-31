const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/create', pokemonController.showCreateForm);  
router.post('/create', pokemonController.createPokemon); 

module.exports = router;
