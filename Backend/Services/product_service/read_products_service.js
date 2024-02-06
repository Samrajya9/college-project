const AppError = require("../../Error/custom_error");
const read_products_logic = require("../../Functions/product/read_products_logic");

const read_products_service = async (req, res) => {
  try {
    const product_id= req.params.ProductId
    const result = await read_products_logic();
    console.log(result);
    if(!product_id){
      const resp = {
        data: result,
        message:"Lisiting Products"
      }
      return resp;
    }else{
      const product = result.product.find(product=>product.id == product_id)
      const product_log = result.product_log.find(product=>product.product_id == product_id)
      if(!product){
        throw new AppError(`NO product found for id ${product_id}`)
      }else{
        const resp ={
          data:{product,product_log},
          message:`User with their data`
        }
        return  resp ;
      }
    }
   

  } catch (error) {
    throw error;
  }
};
module.exports = read_products_service;
