require("dotenv").config();
const express = require("express");
const middleware_error = require("./Middlewares/error_handler.js/middlewares_error");
const routes = require("./Routes/routes");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
app.use(middleware_error);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
