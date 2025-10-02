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
      return {...store,
        characters: action.payload
      };
      case "set_planets":
      return {...store,
        planets: action.payload
      };
      case "set_vehicles":
      return {...store,
        vehicles: action.payload
      };
      case "set_favorites":
        const currentFavs = store.favorites;
        const newFav = action.payload;
        return {
          ...store,
          favorites: [...currentFavs, newFav]
        }
    default:
      throw Error('Unknown action.');
  }
}
