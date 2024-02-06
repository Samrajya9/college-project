async function fetchDB() {
  const result = await fetch("http://localhost:3000/read_products")
  const responseData = await result.json()
  const data = responseData[0]
  //   console.log(data)
  return data
}
export { fetchDB }
