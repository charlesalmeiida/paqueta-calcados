import { useProductStore } from "@/store/product-store"
import { ItemFavorite } from "./item-favorite"

export function ModalFavorites() {
  const { favorites } = useProductStore()

  return (
    <div className="absolute top-20 right-32 bg-light rounded-sm shadow-lg w-[400px] p-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Favoritos</h3>

      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <ItemFavorite
            key={favorite.id}
            name={favorite.name}
            image={favorite.image}
            price={favorite.price.value}
            productId={favorite.id}
          />
        ))
      ) : (
        <p className="text-gray-600">Nenhum produto favoritado</p>
      )}
    </div>
  )
}
