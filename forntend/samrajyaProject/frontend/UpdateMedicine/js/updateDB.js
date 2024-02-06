export async function updateDB(productId, req_data) {
  const result = await fetch(
    `http://localhost:3000/update_products/${productId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: req_data,
    }
  )
  const responseData = await result.json()
  return responseData[0]
}
