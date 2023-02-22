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
      <h1>Machines</h1>
      <ul>
        {machines.map((machine) => {
          return (
            <li key={machine.id}>
              {machine.id} 
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Machines;
