import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import vehiclesImages from "../assets/vehicleImages.js";

export const Vehicle = () => {
    const { vehicleId } = useParams();

    const BASE_URL = "https://www.swapi.tech/api/vehicles/";

    const [vehicleDetails, setVehicleDetails] = useState({})

    // FETCH PLANET BY ID
    useEffect(() => {
        async function fetchVehicle() {
            try {
                const response = await fetch(`${BASE_URL}${vehicleId}`);
                const data = await response.json();
                const vehicleData = data.result.properties;
                setVehicleDetails(vehicleData);
            } catch (error) {
                console.log("There was an error:", error);
            }
        }
        fetchVehicle();
    }, []);

    return (
        <main>
            <section className="row p-5">
                <div className="col ratio ratio-1x1">
                    <img
                        src={vehiclesImages[vehicleDetails.name] || "https://placehold.co/150x150"}
                        className="object-fit-fill"
                        alt={vehicleDetails.name || ""}
                    />
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h2 className="text-primary text-center">{vehicleDetails.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, eum illo commodi eligendi quasi quod neque iusto pariatur perspiciatis sint? Quis repudiandae quos quo reiciendis dignissimos, ea eos totam laboriosam.</p>
                </div>
            </section>
            <hr style={{maxWidth: "80%", borderColor: "red", margin: "1rem auto", borderWidth:"4px"}} />
            <section className="d-flex justify-content-around text-danger mb-5">
                <div>
                    <p className="fw-bold">Model:</p>
                    <p className="text-center">{vehicleDetails.model}</p>
                </div>
                <div>
                    <p className="fw-bold">Max Passengers:</p>
                    <p className="text-center">{vehicleDetails.passengers == "0" ? "Pilot Only" : vehicleDetails.passengers}</p>
                </div>
                <div>
                    <p className="fw-bold">Manufacturer:</p>
                    <p className="text-center">{vehicleDetails.manufacturer}</p>
                </div>
                <div>
                    <p className="fw-bold">Vehicle Class:</p>
                    <p className="text-center">{vehicleDetails.vehicle_class ? vehicleDetails.vehicle_class.charAt(0).toUpperCase() + vehicleDetails.vehicle_class.slice(1): ""}</p>
                </div>
                <div>
                    <p className="fw-bold">Cargo Capacity:</p>
                    <p className="text-center">{vehicleDetails.cargo_capacity}</p>
                </div>
            </section>
        </main>
    );
};