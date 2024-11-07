'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('trainers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable('trainer_pokemons', {
      trainer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'trainers',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      pokemon_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pokemons',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('trainer_pokemons');

    await queryInterface.dropTable('pokemons');
    await queryInterface.dropTable('trainers');
  }
};
