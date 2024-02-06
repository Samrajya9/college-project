export async function insertDataIntoDB(req_data) {
  const result = await fetch("http://localhost:3000/create_products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: req_data,
  })
  const responseData = await result.json()
  const data = responseData[0]
  return data
}
