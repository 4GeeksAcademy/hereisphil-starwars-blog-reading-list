import { useNavigate, useParams } from "react-router-dom";

export const Planet = () => {
    const navigate = useNavigate();
    const { planetId } = useParams();
    console.log("This is the planetId:", planetId)
    return (
        <h1>Hello World</h1>
    );
};