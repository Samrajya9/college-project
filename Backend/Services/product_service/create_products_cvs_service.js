const AppError = require("../../Error/custom_error");
const read_csv_file_logic = require("../../Functions/csv/read_csv_file_logic");
const create_products_csv_logic = require("../../Functions/product/create_products_csv_logic");
const create_products_logic = require("../../Functions/product/create_products_logic");

const create_products_cvs_service = async (req, res) => {
  try {
    const file_path = req.body;
    // need to change how to take file path right taking it from json format from req.body which is an object and Object.values(file_path) return array
    const path = Object.values(file_path)[0];
    let csv_file_result = await read_csv_file_logic(path);

    if (!csv_file_result) {
      throw new AppError("Error reading CSV file:", 400);
    }
    // Formatting data
    const array_of_data = csv_file_result.map((data) => {
      for (const [key, value] of Object.entries(data)) {
        if (key === "quantity" || key === "price") {
          data[key] = parseInt(data[key]);
        }
      }
      return data;
    });
    // Filter out elements where name is empty or batch_no is empty
    const filtered_data = array_of_data.filter(
      (data) => !(data.name === "" || data.batch_no === "")
    );
    // apporach 1
    let results = [];
    for (const [index, data] of filtered_data.entries()) {
      const result = await create_products_logic(data);
      results.push(result);
    }
    // apporach 2
    // const result = await create_products_csv_logic(csv_file_result);
    return results;
  } catch (error) {
    throw error;
  }
};
module.exports = create_products_cvs_service;
