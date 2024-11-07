const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Trainer = require('./trainerModel');

class Pokemon extends Model {}

Pokemon.init(
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trainerId: {
            type: DataTypes.INTEGER,
            references: {
                model: Trainer,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'Pokemon',
        tableName: 'pokemons',
        timestamps: false
    }
);

Trainer.hasMany(Pokemon, { foreignKey: 'trainerId' });
Pokemon.belongsTo(Trainer, { foreignKey: 'trainerId' });

module.exports = Pokemon;
