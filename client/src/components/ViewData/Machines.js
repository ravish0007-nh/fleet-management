import { useEffect, useState } from "react";
import FleetService from "../../fleetService.js";

function Machines() {
  const [machines, setMachines] = useState([]);
  const [location, setLocation] = useState();

  useEffect(() => {
    async function fetchData() {
      const machines = await FleetService.getMachines();
      setMachines(machines);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(location == null) {
      return
    }

    FleetService.addMachine(location).then( (data) => {
      if(data) {
        setMachines([...machines, data])
      }
    })

    setLocation(null)

  }

  return (
    <>
      <div className="border-2 p-4 space-y-2">
        <h1 className="m-auto w-1/2">Machines</h1>
        <ul>
          {machines.map((machine) => {
            return (
              <li key={machine.id}>
                id: {machine.id}, location_id: {machine.location_id}
              </li>
            );
          })}
        </ul>

        <form 
          onSubmit={handleSubmit}
          className='space-x-2'
        >
          <input
            className="border p-2"
            type="number"
            placeholder="location id"
            value={location || ''}
            onChange={handleChange}
          />
          <input 
          className="bg-black text-white p-2 rounded"
          type="submit" 
          value="submit" 
          />
        </form>
      </div>
    </>
  );
}

export default Machines;
