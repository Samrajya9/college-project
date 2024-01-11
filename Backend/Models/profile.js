const connection = require('./connection')
// create a profile table 
// const ProfileSchema ={
//     id,
//     first_name, 
//  middle_name,
// last_name,
// date_of_birth
// gender,
// address  
// user_id forrign key reference to user table and it is unique so that one profile belongs to one user
// }
const profilesSchema =`
CREATE TABLE IF NOT EXISTS profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    user_id INT, 
    UNIQUE KEY (user_id), 
    FOREIGN KEY (user_id) REFERENCES users(id)
)
`

  connection.query(profilesSchema,(err)=>{
    if (err) {
        console.error(`Error creating profiles table: ${err.message.sqlMessage}`);
        connection.end();
        return;
    }
    console.log('profiles table created successfully');
  })