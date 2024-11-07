const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
class Trainer extends Model {}

Trainer.init(
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,       
        modelName: 'Trainer',
        tableName: 'trainers', 
        timestamps: true 
    }
);

module.exports = Trainer;
