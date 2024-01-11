
const connection = require('./connection')

// create a prodcut database 
// const productsSchema ={
//     id,
//     name,
//     batch_no,
//     drug_name,
//     mfg_date,
//     exp_date,
//     quantity,
//     price
// }
const productSchema = `
  CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    batch_no VARCHAR(50) NOT NULL,
    drug_name VARCHAR(100) NOT NULL,
    mfg_date DATE NOT NULL,
    exp_date DATE NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
  )
`;
 connection.query(productSchema, (err) => {
    if (err) {
        console.error(`Error creating products table: ${err.message.sqlMessage}`);
        connection.end();
        return;
    }
    console.log('Products table created successfully');

});

