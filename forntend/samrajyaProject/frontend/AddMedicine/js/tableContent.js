import { fetchDB } from "./fetchDB.js"
import { number_of_recently_added_products } from "../../Dashboard/js/number_of_recently_added_products.js"
import { convertToYearMonthDay } from "../../logic/convert_data_format.js"
export async function tableDataContent() {
  const result = await fetchDB()
  const data = result.result.data
  const date = new Date()
  const current_date = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
  const recent_added_products = number_of_recently_added_products(
    current_date,
    data.product,
    data.product_log
  )
  const table_details = recent_added_products.map((product) => {
    return `
      <tr>
          <td id="product.id" style="display: none;">${product.id}</td>
          <td>${product.drug_name}</td>
          <td>${product.batch_no}</td>
          <td>${convertToYearMonthDay(product.mfg_date)}</td>
          <td>${convertToYearMonthDay(product.exp_date)}</td>
          <td>${product.price}</td>
          <td>${product.quantity}</td>
          <td><button> <a href="../UpdateMedicine/updateMedicine.html?id=${
            product.id
          } ">Edit</a></button></td>
          <td><button id="delete_product_btn">Delete</button></td>

      </tr>
  `
  })
  console.log(table_details)
  return table_details
}
