export const initialStore = () => {
  return {
    people: [],
    vehicles: [],
    planets: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_people":
      return {...store,
        people: action.payload
      };
    default:
      throw Error('Unknown action.');
  }
}
