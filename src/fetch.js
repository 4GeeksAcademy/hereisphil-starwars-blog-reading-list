// "people": "https://www.swapi.tech/api/people"
// "planets": "https://www.swapi.tech/api/planets"
// "vehicles": "https://www.swapi.tech/api/vehicles"

import { useEffect } from "react";
import useGlobalReducer from "./hooks/useGlobalReducer";

export const fetch = () => {
    const {dispatch} =useGlobalReducer();

    const BASE_URL = "https://www.swapi.tech/api/";

    // Fetch the People
    useEffect(() => {
    async function fetchPeople() {
      try {
		const response = await fetch(`${BASE_URL}people`);
        const data = await response.json();
        const peopleData = data.results;
        console.log("The peopleData array:", peopleData);
        dispatch({ type: "set_people", payload: peopleData });
      } catch (error) {
        console.log("There was an error:", error);
      }
    }
    fetchPeople();
  }, []);
}


