import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import characterImages from "../assets/characterImages.js";

export function Character() {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { characterId } = useParams();
    console.log("This is the characterId:", characterId)
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
        <main>
            <img src={characterImages[characterDetails.name]} alt={characterDetails.name} />
            <h2>{characterDetails.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur corporis, repudiandae necessitatibus voluptatibus recusandae possimus doloribus at beatae tempora commodi quos deserunt vel voluptas excepturi doloremque saepe molestias accusamus incidunt!</p>
            <hr />
            
        </main>
    )
}

// Click learn more, /${people}/${people.name.tolowercase().replace(" ", "-")}, 1=uuid, people =
// Use same image, have name, summary, and

