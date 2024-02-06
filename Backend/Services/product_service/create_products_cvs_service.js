const AppError = require("../../Error/custom_error");
const read_csv_file_logic = require("../../Functions/csv/read_csv_file_logic");
const convertToYearMonthDay = require("../../Functions/date/conver_to_db_date_format");
const create_products_csv_logic = require("../../Functions/product/create_products_csv_logic");
const create_products_logic = require("../../Functions/product/create_products_logic");

const create_products_cvs_service = async (req, res) => {
  try {
    const file_path = req.body;
    // console.log(`file_path = ${Object.values(file_path)[0]}`);
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
      for (const [key, value] of Object.entries(data)) {
        if (key === "mfg_date" || key === "exp_date") {
          const dbvalue = convertToYearMonthDay(value)
          // console.log(`Converting ${key} from ${value} to ${convertToYearMonthDay(value)} ${dbvalue}`);
          // data[key] = convertToYearMonthDay(data[key])
          data[key] = dbvalue;
        }
      }
      return data;
    });
    // Filter out elements where name is empty or batch_no is empty
    const filtered_data = array_of_data.filter(
      (data) => !(data.drug_name === "" || data.batch_no === "")
    );
    console.log(`\n filtered data with data that donot contain drug name and batch no are filtered out`);
    console.log(filtered_data);
    // apporach 1
    let results = [];
    for (const [index, data] of filtered_data.entries()) {
      // console.log(data);
      const result = await create_products_logic(data);
      results.push(result);
    }
    // apporach 2
    // const result = await create_products_csv_logic(csv_file_result);
    console.log(results);
    return results;
  } catch (error) {
    throw error;
  }
};
module.exports = create_products_cvs_service;
