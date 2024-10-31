const trainers = [];

const getTrainers = () => trainers;

const createTrainer = (nome, pokemonIds) => {
    const newTrainer = {
        id: trainers.length + 1,
        nome,
        pokemons: pokemonIds.map(id => parseInt(id)) // Converte os IDs para inteiros
    };
    trainers.push(newTrainer);
};

const getTrainerById = (id) => trainers.find(t => t.id === parseInt(id));

module.exports = { getTrainers, createTrainer, getTrainerById };
