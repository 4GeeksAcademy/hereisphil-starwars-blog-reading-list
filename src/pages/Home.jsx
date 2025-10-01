import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const BASE_URL = "https://www.swapi.tech/api/";

  // FETCH THE CHARACTERS
  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(`${BASE_URL}people`);
        const data = await response.json();
        const characterData = data.results;
        dispatch({ type: "set_characters", payload: characterData });
      } catch (error) {
        console.log("There was an error:", error);
      }
    }
    fetchCharacters();
  }, []);

  // FETCH PLANETS
  useEffect(() => {
    async function fetchPlanets() {
      try {
        const response = await fetch(`${BASE_URL}planets`);
        const data = await response.json();
        const planetsData = data.results;
        dispatch({ type: "set_planets", payload: planetsData });
      } catch (error) {
        console.log("There was an error:", error);
      }
    }
    fetchPlanets();
  }, []);

  // FETCH VEHICLES
  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await fetch(`${BASE_URL}vehicles`);
        const data = await response.json();
        const vehiclesData = data.results;
        dispatch({ type: "set_vehicles", payload: vehiclesData });
      } catch (error) {
        console.log("There was an error:", error);
      }
    }
    fetchVehicles();
  }, []);

  return (
    <main>
      <ul>
        {store.characters.map((character) => <li key={`${character.uid} ${character.name}`}>{character.name}</li>)}
      </ul>
      <ul>
        {store.planets.map((planet) => <li key={`${planet.uid} ${planet.name}`}>{planet.name}</li>)}
      </ul>
      <ul>
        {store.vehicles.map((vehicle) => <li key={`${vehicle.uid} ${vehicle.name}`}>{vehicle.name}</li>)}
      </ul>
    </main>
  );
};