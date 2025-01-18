import { api } from "./api"

export async function getProducts() {
  const data = await api.get("shoes")

  const products = await data.data

  return products
}
