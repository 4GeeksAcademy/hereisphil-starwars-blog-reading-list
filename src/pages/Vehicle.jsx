import { useNavigate, useParams } from "react-router-dom";

export const Vehicle = () => {
    const navigate = useNavigate();
    const { vehicleId } = useParams();
    console.log("This is the vehicleId:", vehicleId)

    return (
        <h1>Hello World</h1>
    );
};