const connection = require('./connection')
const product_logSchema = `
CREATE TABLE IF NOT EXISTS product_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id)
)`;
connection.query(product_logSchema, (err) => {
    if (err) {
        console.error(`Error creating product_log table: ${err.message.sqlMessage}`);
        connection.end();
        return;
    }
    console.log('Product_log table created successfully');
});