import { useEffect, useState } from "react";
import FleetService from "../fleetService.js";

function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const machines = await FleetService.getLocations();
      setLocations(machines);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Locations</h1>
      <ul>
        {locations.map((location) => {
          return (
            <li key={location.id}>
              <p>{location.address} </p>
              <p>{location.latitude}, {location.longitude}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Locations;
