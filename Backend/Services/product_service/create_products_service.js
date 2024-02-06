const AppError = require("../../Error/custom_error");
const convertToYearMonthDay = require("../../Functions/date/conver_to_db_date_format");
const create_products_logic = require("../../Functions/product/create_products_logic");

const create_products_service = async (req, res) => {
  try {
    const data = { ...req.body };
    for (const [key, value] of Object.entries(data)) {
      if (!data.hasOwnProperty(key) || data[key] === "") {
        throw new AppError(`Missing details for ${key}`, 400);
      }
    }
    // Formatting data
    for (const [key, value] of Object.entries(data)) {
      if (key === "mfg_date" || key === "exp_date") {
        const dbvalue = convertToYearMonthDay(value)
        console.log(`Converting ${key} from ${value} to ${convertToYearMonthDay(value)} `);
        // data[key] = convertToYearMonthDay(data[key])
        data[key] = dbvalue;
      }
    }
    for (const [key, value] of Object.entries(data)) {
      if (key === "quantity" || key === "price") {
        data[key] = parseInt(data[key]);
      }
    }

    const result = await create_products_logic(data);
    console.log(result);
    if(result.message ==`Quantity updated for existing product`){
      const resp = {
        data:productDetails,
        message:result.message
      }
      return resp ;
    }else{
      const resp = {
        data:result.result_add_product.productDetails,
        product_log_id: result.result_add_product_log.product_log_id,
        message:result.result_add_product.message
       
      }
      
      return resp;
    }  
  } catch (error) {
    throw error;
  }
};
module.exports = create_products_service;
