import {useState, useEffect} from 'react'
import Machine from './Machine'

import FleetService from '../../fleetService'

function Machines() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const machines = await FleetService.getMachines();
      setMachines(machines);
    }
    fetchData();
  }, []);

  return(
    
        <div className='space-y-4 mx-auto w-1/6 mt-10'>
          {machines.map((machine) => {
            return (
              <Machine machine={machine} key={machine.id} />
            )
          })}
        </div>

  )
}


export default Machines
