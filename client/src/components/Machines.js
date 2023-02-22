import { useEffect, useState } from "react";
import FleetService from "../fleetService.js";

function Machines() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const machines = await FleetService.getMachines();
      setMachines(machines);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="border-2 p-4">
        <h1 className="m-auto w-1/2">Machines</h1>
        <ul>
          {machines.map((machine) => {
            return <li key={machine.id}>id: {machine.id}, location_id: {machine.location_id}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Machines;
