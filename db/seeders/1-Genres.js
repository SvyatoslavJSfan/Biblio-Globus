'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const genres = [
      {name: 'Романы'},
      {name: 'Детективы'},
      {name: 'Детская литература'},
      {name: 'Фантастика'},
      {name: 'Учебная литература'},
      {name: 'Научно-техническая литература'},
    ]

     await queryInterface.bulkInsert('Genres', genres, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Genres', null, {});
     
  }
};
