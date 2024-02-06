export async function deleteDatafromDB(productId) {
  const result = await fetch(
    `http://localhost:3000/delete_products/${productId}`,
    {
      method: "DELETE",
    }
  )
  const responseData = await result.json()
  const data = responseData[0]
  return data
}
