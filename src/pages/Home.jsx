import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import characterImages from "../assets/characterImages.js";
import planetImages from "../assets/planetImages.js";
import vehicleImages from "../assets/vehicleImages.js";

export const Home = () => {
  const navigate = useNavigate();
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
    <main className="py-2 px-4">
      {/* CHARACTERS */}
      <h2 className="text-danger">Characters</h2>
      <div className="d-flex flex-nowrap overflow-auto py-2">
        {store.characters.map((character) =>
          <article
            className="card me-3 flex-shrink-0"
            style={{ width: "18rem" }}
            key={`${character.uid} ${character.name}`}>
            <img src={characterImages[character.name]} className="card-img-top" alt={character.name} />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={(e) => {navigate(`/character/${character.uid}`);}}>Learn more!</button>
                <a href="#" className="btn btn-warning"><i className="fa-regular fa-heart"></i></a>
              </div>
            </div>
          </article>
        )}
      </div>
      {/* PLANETS */}<h2 className="text-danger">Planets</h2>
      <div className="d-flex flex-nowrap overflow-auto py-2">
        {store.planets.map((planet) =>
          <article
            className="card me-3 flex-shrink-0"
            style={{ width: "18rem" }}
            key={`${planet.uid} ${planet.name}`}>
            <img src={planetImages[planet.name]} className="card-img-top" alt={planet.name} />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={(e) => {navigate(`/planet/${planet.uid}`);}}>Learn more!</button>
                <a href="#" className="btn btn-warning"><i className="fa-regular fa-heart"></i></a>
              </div>
            </div>
          </article>
        )}
      </div>
      {/* VEHICLES */}
      <h2 className="text-danger">Vehicles</h2>
      <div className="d-flex flex-nowrap overflow-auto py-2">
        {store.vehicles.map((vehicle) =>
          <article
            className="card me-3 flex-shrink-0"
            style={{ width: "18rem" }}
            key={`${vehicle.uid} ${vehicle.name}`}>
            <img src={vehicleImages[vehicle.name]} className="card-img-top" alt={vehicle.name} />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={(e) => {navigate(`/vehicle/${vehicle.uid}`);}}>Learn more!</button>
                <a href="#" className="btn btn-warning"><i className="fa-regular fa-heart"></i></a>
              </div>
            </div>
          </article>
        )}
      </div>
    </main>
  );
};