const AppError = require('../Error/custom_error');
const connection =require('./connection')

const database = `CREATE DATABASE ${process.env.database}`;

connection.query(database,(err)=>{
    if (err) {
        throw new AppError(err.message,500)
      } else {
        console.log(`Database '${databaseName}' created successfully`);
      }
      connection.end();
})
module.exports=database;