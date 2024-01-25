const mySql = require('mysql2');
const config = require("../config");
const connection = mySql.createConnection(config.db);

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
})

module.exports = connection.promise();