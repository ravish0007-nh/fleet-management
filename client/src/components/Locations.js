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
    <div className="border-2 p-4 space-y-2">
      <h1 className="m-auto w-1/2">Locations</h1>
      <ul className="space-y-2">
        {locations.map((location) => {
          return (
            <li key={location.id}
            className='border p-2 border-black'
            >
              <p>latitude: {location.latitude}, longitude: {location.longitude}</p>
              <p>location_id: {location.id}</p>
              <p>address: {location.address}</p>
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
}

export default Locations;
