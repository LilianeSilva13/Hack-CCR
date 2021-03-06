'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enderecoUser', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true, 
        allowNull: false,
      }, 
      user_id: {
        type:Sequelize.INTEGER,
        allowNull:true,
        // references: { model: 'users', key: 'id' },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
      },
      cep: {
        type: Sequelize. STRING,
        allowNull: true,
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: true,
      }, 
      number: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      complem: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      preexiste: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }); 
      },

  };

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  };

