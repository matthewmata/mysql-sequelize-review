const Sequelize = require('sequelize');

const connection = new Sequelize('dbreview', 'root', '', {
  hose: 'localhost',
  dialect: 'mariadb',
});

connection 
  .authenticate()
  .then(() => console.log('Connected to MySQL Database'))
  .catch(error => console.error(error));

module.exports = connection;
