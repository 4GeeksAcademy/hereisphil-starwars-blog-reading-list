// "people": "https://www.swapi.tech/api/people"
// "planets": "https://www.swapi.tech/api/planets"
// "vehicles": "https://www.swapi.tech/api/vehicles"

import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Characters = () => {
    const {store, dispatch} =useGlobalReducer();
    useEffect(() => {
    async function fetchPeople() {
      try {
        const response = await fetch("https://www.swapi.tech/api/people");
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

  return (
    <ul>
    {store.people.map((person)=><li key={person.uid}>{person.name}</li>)}
    </ul>
  )
}


