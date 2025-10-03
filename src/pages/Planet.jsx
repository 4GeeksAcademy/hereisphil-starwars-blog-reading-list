import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Planet = () => {
    const { planetId } = useParams();
    console.log("This is the planetId:", planetId)

    const BASE_URL = "https://www.swapi.tech/api/planets/";

    const [planetDetails, setPlanetDetails] = useState({})

    useEffect(() => {
        async function fetchPlanet() {
            try {
                const response = await fetch(`${BASE_URL}${planetId}`);
                const data = await response.json();
                const planetData = data.result.properties;
                setPlanetDetails(planetData);
            } catch (error) {
                console.log("There was an error:", error);
            }
        }
        fetchPlanet();
    }, []);

    return (
        <main>
            <section className="row p-5">
                <div className="col-md-4 d-flex justify-content-center">
                    <img
                        src={`/images/planets/${planetId}.jpg` || "https://placehold.co/150x150"}
                        className="img-fluid rounded"
                        style={{ maxWidth: "400px", objectFit: "cover", objectPosition: "top" }}
                        alt={planetDetails.name || ""}
                    />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center">
                    <h2 className="text-primary text-center">{planetDetails.name || "Loading..."}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, eum illo commodi eligendi quasi quod neque iusto pariatur perspiciatis sint? Quis repudiandae quos quo reiciendis dignissimos, ea eos totam laboriosam.</p>
                </div>
            </section>
            <hr style={{ maxWidth: "80%", borderColor: "red", margin: "1rem auto", borderWidth: "4px" }} />
            <section className="d-flex justify-content-around text-danger mb-5">
                <div>
                    <p className="fw-bold">Terrain:</p>
                    <p className="text-center">{planetDetails.terrain ? planetDetails.terrain.charAt(0).toUpperCase() + planetDetails.terrain.slice(1) : ""}</p>
                </div>
                <div>
                    <p className="fw-bold">Population:</p>
                    <p className="text-center">{planetDetails.population}</p>
                </div>
                <div>
                    <p className="fw-bold">Climate:</p>
                    <p className="text-center">{planetDetails.climate ? planetDetails.climate.charAt(0).toUpperCase() + planetDetails.climate.slice(1) : ""}</p>
                </div>
                <div>
                    <p className="fw-bold">Surface Water:</p>
                    <p className="text-center">{planetDetails.surface_water}</p>
                </div>
                <div>
                    <p className="fw-bold">Diameter:</p>
                    <p className="text-center">{planetDetails.diameter}</p>
                </div>
            </section>
        </main>
    );
};