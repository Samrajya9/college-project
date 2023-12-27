const create_profile_controller = require("../Controllers/profile_controller/create_profile_controller");
const read_profile_controller = require("../Controllers/profile_controller/read_profile_controller");
const update_profile_controller = require("../Controllers/profile_controller/update_profile_controller");
const create_user_conttroller = require("../Controllers/user_controller/create_user_controller");
const login_user_controller = require("../Controllers/user_controller/login_user_controller");
const read_users_controller = require("../Controllers/admin_controller/read_users_controller");
const delete_users_controller = require("../Controllers/admin_controller/delete_users_controller");
const create_products_controller = require("../Controllers/product_controller/create_products_controller");
const read_products_controller = require("../Controllers/product_controller/read_products_controller");
const update_products_controller = require("../Controllers/product_controller/update_products_controller");
const delete_products_controllers = require("../Controllers/product_controller/delete_products_controllers");
const logout_user_controller = require("../Controllers/user_controller/logout_user_controller");
const create_products_cvs_controller = require("../Controllers/product_controller/create_products_cvs_controller");

const routes = require("express").Router();
// user routes
routes.post("/signup", create_user_conttroller);
routes.post("/signin", login_user_controller);
routes.delete("/sign_out", logout_user_controller);

// profile routes
routes.post("/create_profile", create_profile_controller);
routes.get("/read_profile", read_profile_controller);
routes.patch("/update_profile/:id", update_profile_controller);

// admin routes
routes.get("/read_users", read_users_controller);
routes.delete("/delete_users", delete_users_controller);

// Products routes
routes.post("/create_products", create_products_controller);
routes.post("/create_products_cvs", create_products_cvs_controller);
routes.get("/read_products", read_products_controller);
routes.put("/update_products", update_products_controller);
routes.delete("/delete_products", delete_products_controllers);
module.exports = routes;
