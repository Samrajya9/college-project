const read_one_product_logic = require("../../Functions/product/read_one_product");

const read_one_product_service = async (req, res) => {
    try {
      const result = await read_one_product_logic(req.params.ProductId);
      console.log(result);
      const resp = {
        data: result,
        message:"Lisiting Products"
      }
      return resp;
    } catch (error) {
      throw error;
    }
  };
  module.exports = read_one_product_service;
  