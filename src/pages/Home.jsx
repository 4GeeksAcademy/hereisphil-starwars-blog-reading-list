import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Home = () => {

const BASE_URL = "https://www.swapi.tech/api/";
  useEffect(() => {
    async function fetchPeople() {
      try {
		const response = await fetch(`${BASE_URL}people`);
        console.log("response:", response);
        const data = await response.json();
        console.log("data json:", data);
        const peopleData = data.results;
        console.log("peopleData array:", peopleData);
        // setUser(userData);
      } catch (error) {
        console.log("There was an error:", error);
      }
    }
    fetchPeople();
  }, []);

	return (
		<div className="text-center mt-5">
		</div>
	);
}; 