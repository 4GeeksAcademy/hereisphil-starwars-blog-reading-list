import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();

  // FETCH THE CHARACTERS
  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch("https://www.swapi.tech/api/people/?expanded=true");
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
        const response = await fetch("https://www.swapi.tech/api/planets/?expanded=true");
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
        const response = await fetch("https://www.swapi.tech/api/vehicles/?expanded=true");
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
            key={`${character.uid} ${character.properties.name}`}>
            <div className="ratio ratio-4x3">
              <img src={`/images/people/${character.uid}.jpg` || "https://placehold.co/150x150"} className="card-img-top object-fit-cover" style={{ objectPosition: "top" }} alt={character.properties.name || ""} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{character.properties.name || "Loading..."}</h5>
              <ul>
                <li>{character.properties.gender === "n/a" ? "Droid" : character.properties.gender.charAt(0).toUpperCase() + character.properties.gender.slice(1)}</li>
                <li>{character.properties.height}</li>
              </ul>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    navigate(`/character/${character.uid}`);
                  }}>
                  Learn more!
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={(e) => {
                    dispatch({
                      type: "toggle_favorite",
                      payload: {
                        id: character.uid,
                        name: character.properties.name,
                        nature: "character"
                      }
                    })
                  }}>
                  {store.favorites.find((favorite) => favorite.id === character.uid && favorite.name === character.properties.name) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </button>
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
            key={`${planet.uid} ${planet.properties.name}`}>
            <div className="ratio ratio-4x3">
              <img src={`/images/planets/${planet.uid}.jpg` || "https://placehold.co/150x150"} className="card-img-top object-fit-cover" alt={planet.properties.name || ""} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{planet.properties.name || "Loading..."}</h5>
              <ul>
                <li>{planet.properties.terrain.charAt(0).toUpperCase() + planet.properties.terrain.slice(1)}</li>
                <li>Population: {planet.properties.population}</li>
              </ul>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={
                    (e) => {
                      navigate(`/planet/${planet.uid}`);
                    }}>
                  Learn more!
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={(e) => {
                    dispatch({
                      type: "toggle_favorite",
                      payload: {
                        id: planet.uid,
                        name: planet.properties.name,
                        nature: "planet"
                      }
                    })
                  }}>
                  {store.favorites.find((favorite) => favorite.id === planet.uid && favorite.name === planet.properties.name) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </button>
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
            key={`${vehicle.uid} ${vehicle.properties.name}`}>
            <div className="ratio ratio-4x3">
              <img src={`/images/vehicles/${vehicle.uid}.jpg` || "https://placehold.co/150x150"} className="card-img-top object-fit-cover" style={{ objectPosition: "top" }} alt={vehicle.properties.name || ""} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{vehicle.properties.name || "Loading..."}</h5>
              <ul>
                <li>Model: {vehicle.properties.model}</li>
                <li>Max Passengers: {vehicle.properties.passengers}</li>
              </ul>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={
                    (e) => {
                      navigate(`/vehicle/${vehicle.uid}`);
                    }}>
                  Learn more!
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={(e) => {
                    dispatch({
                      type: "toggle_favorite",
                      payload: {
                        id: vehicle.uid,
                        name: vehicle.properties.name,
                        nature: "vehicle"
                      }
                    })
                  }}>
                  {store.favorites.find((favorite) => favorite.id === vehicle.uid && favorite.name === vehicle.properties.name) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </button>
              </div>
            </div>
          </article>
        )}
      </div>
    </main>
  );
};