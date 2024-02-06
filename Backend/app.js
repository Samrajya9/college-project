require("dotenv").config();
require('./Models/products')
require('./Models/user')
require('./Models/profile')
require('./Models/product_log')
const express = require("express");
const cors = require('cors');
const middleware_error = require("./Middlewares/error_handler.js/middlewares_error");
const routes = require("./Routes/routes");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
app.use(middleware_error);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
