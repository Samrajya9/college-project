const connection = require('./connection')
// create a user table 
// const usesrsSchema ={
//     id,
//     emial,
//     password
// }
const usesrsSchema =`
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    roles VARCHAR(255) DEFAULT 'pharmacist'
)
`

  connection.query(usesrsSchema,(err)=>{
    if (err) {
        console.error(`Error creating users table: ${err.message.sqlMessage}`);
        connection.end();
        return;
    }
    console.log('Users table created successfully');
  })