import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Vehicle } from "./pages/Vehicle";
import { Planet } from "./pages/Planet";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path= "/" element={<Home />} />
        <Route path= "/character/:characterId" element={<Character />} />
        <Route path= "/vehicle/:vehicleId" element={<Vehicle />} />
        <Route path= "/planet/:planetId" element={<Planet />} />
      </Route>
    )
);