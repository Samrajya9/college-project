function out_of_stock_logic (data){
    const out_of_stock_product = data.filter(element=>{
        return element.quantity == 0
    })
    return out_of_stock_product
}
export { out_of_stock_logic }