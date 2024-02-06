function going_out_of_stock_logic(data) {
  const going_out_of_stock_product = data.filter((element) => {
    return element.quantity < 10 && element.quantity > 0
  })
  return going_out_of_stock_product
}
export { going_out_of_stock_logic }
