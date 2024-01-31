const AppError = require('../Error/custom_error');
const connection = require('./connection');

const databaseName = process.env.database;

const databaseQuery = `CREATE DATABASE ${databaseName}`;

connection.query(databaseQuery, (err) => {
    if (err) {
        throw new AppError(err.message, 500);
    } else {
        console.log(`Database '${databaseName}' created successfully`);
    }
    connection.end();
});

module.exports = databaseQuery;
