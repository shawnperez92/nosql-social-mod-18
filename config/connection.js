const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/socialnetworkDB');

module.exports = connection;