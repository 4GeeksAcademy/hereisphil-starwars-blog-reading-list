import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Character = () => {
    const { characterId } = useParams();

    const BASE_URL = "https://www.swapi.tech/api/people/";

    const [characterDetails, setCharacterDetails] = useState({})

    useEffect(() => {
        async function fetchCharacter() {
            try {
                const response = await fetch(`${BASE_URL}${characterId}`);
                const data = await response.json();
                const characterData = data.result.properties;
                setCharacterDetails(characterData);
            } catch (error) {
                console.log("There was an error:", error);
            }
        }
        fetchCharacter();
    }, []);

    return (
        <main>
            <section className="row p-5">
                <div className="col-md-4 d-flex justify-content-center">
                    <img
                        src={`/images/people/${characterId}.jpg` || "https://placehold.co/150x150"}
                        className="img-fluid rounded"
                        style={{ maxWidth: "400px", objectFit: "cover", objectPosition: "top" }}
                        alt={characterDetails.name || ""}
                    />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center">
                    <h2 className="text-primary text-center">{characterDetails.name || "Loading..."}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, eum illo commodi eligendi quasi quod neque iusto pariatur perspiciatis sint? Quis repudiandae quos quo reiciendis dignissimos, ea eos totam laboriosam.</p>
                </div>
            </section>
            <hr style={{ maxWidth: "80%", borderColor: "red", margin: "1rem auto", borderWidth: "4px" }} />
            <section className="d-flex justify-content-around text-danger mb-5">
                <div>
                    <p className="fw-bold">Gender:</p>
                    <p className="text-center">{characterDetails.gender === "n/a" ? "Droid" : characterDetails.gender ? characterDetails.gender.charAt(0).toUpperCase() + characterDetails.gender.slice(1) : ""}</p>
                </div>
                <div>
                    <p className="fw-bold">Height:</p>
                    <p className="text-center">{characterDetails.height}</p>
                </div>
                <div>
                    <p className="fw-bold">Birth Year:</p>
                    <p className="text-center">{characterDetails.birth_year}</p>
                </div>
                <div>
                    <p className="fw-bold">Hair Color:</p>
                    <p className="text-center">{characterDetails.hair_color ? characterDetails.hair_color.charAt(0).toUpperCase() + characterDetails.hair_color.slice(1) : ""}</p>
                </div>
                <div>
                    <p className="fw-bold">Eye Color:</p>
                    <p className="text-center">{characterDetails.eye_color ? characterDetails.eye_color.charAt(0).toUpperCase() + characterDetails.eye_color.slice(1) : ""}</p>
                </div>
            </section>
        </main>
    );
};