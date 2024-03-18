// 'use strict';

// module.exports ={
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn('orders', 'amount', {
//       type: Sequelize.INTEGER,
//     });

//     await queryInterface.addColumn('orders', 'source', {
//       type: Sequelize.STRING,
//       allowNull: false
//     });
//     await queryInterface.addColumn('orders', 'customerEmail', {
//       type: Sequelize.STRING,
//       allowNull: false
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn('orders', 'amount');
//     await queryInterface.removeColumn('orders', 'source');
//     await queryInterface.removeColumn('orders', 'customerEmail');
//   }
// };


'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders', 'amount', {
      type: Sequelize.INTEGER,
    });

    await queryInterface.addColumn('orders', '`source`', { // Quote `source`
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.addColumn('orders', 'customerEmail', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'customerEmail');
    await queryInterface.removeColumn('orders', '`source`'); // Quote `source`
    await queryInterface.removeColumn('orders', 'amount');
  }
};

