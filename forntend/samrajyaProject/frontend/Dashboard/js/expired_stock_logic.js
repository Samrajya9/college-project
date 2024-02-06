function expired_stock_logic(data) {
  const date = new Date()
  const current_date = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`

  const expiredStockProducts = data.filter((element) => {
    const element_exp_date = new Date(element.exp_date)
    const element_formated_exp_date = `${element_exp_date.getFullYear()}-${(
      element_exp_date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${element_exp_date
      .getDate()
      .toString()
      .padStart(2, "0")}`
    return element_formated_exp_date < current_date
  })
  return expiredStockProducts
}

export { expired_stock_logic }
