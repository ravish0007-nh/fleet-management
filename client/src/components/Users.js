import { useEffect, useState } from "react";
import FleetService from "../fleetService.js";

function Machines() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const users = await FleetService.getUsers();
      setUsers(users);
    }
    fetchData();
  }, []);

  return (
    <div className="border-2 p-4 space-y-2">
      <h1 className="m-auto w-1/2">Users</h1>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={user.id} className="space-x-4">
              <span>{`${index + 1})`}</span>
              <span>name: {user.full_name}</span>,
              <span>email: {user.email}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Machines;
