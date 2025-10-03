export const initialStore = () => {
  return {
    characters: [],
    vehicles: [],
    planets: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_characters":
      return {
        ...store,
        characters: action.payload
      };
    case "set_planets":
      return {
        ...store,
        planets: action.payload
      };
    case "set_vehicles":
      return {
        ...store,
        vehicles: action.payload
      };
    case "toggle_favorite":
      const favoriteItem = store.favorites.find(
        (favorite) => favorite.id == action.payload.id && favorite.name === action.payload.name
      );
      if (!favoriteItem) {
        return {
          ...store,
          favorites: [...store.favorites, action.payload]
        };
      }
      else {
        return {
          ...store,
          favorites: store.favorites.filter(
            (favorite) => favorite.id !== action.payload.id || favorite.name !== action.payload.name
          )
        };
      }

    default:
      throw Error('Unknown action.');
  }
}
