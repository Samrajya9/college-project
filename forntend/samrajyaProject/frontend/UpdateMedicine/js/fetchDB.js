export async function fetchDB(productId) {
  const resp = await fetch(
    `http://localhost:3000/read_one_product/${productId}`
  )
  const data = await resp.json()
  return data[0]
}
