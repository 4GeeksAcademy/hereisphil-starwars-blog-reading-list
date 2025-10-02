import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import characterImages from "../assets/characterImages.js";

export function Characters() {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { characterId } = useParams();
    const [characterDetails, setCharacterDetails] = useState({})
    const characterName = "luke-skywalker";
    const BASE_URL = "https://www.swapi.tech/api/people/";

    // Fetch Character Details
    useEffect(()=>{
        const character = store.characters.find((character) => character.uid == characterId);
        if(!character) navigate("/");
        async function fetchCharacters() {
      try {
        const response = await fetch(`${BASE_URL}${characterId}`);
        const data = await response.json();
        const setCharacterDetails = data.result;
      } catch (error) {
        console.log("There was an error:", error);
      }
    }
    fetchCharacters();
    },[])

    return (
        <h1>Hello World</h1>
    )
}

// Click learn more, /${people}/${people.name.tolowercase().replace(" ", "-")}, 1=uuid, people =
// Use same image, have name, summary, and

