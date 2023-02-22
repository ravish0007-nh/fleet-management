import { useEffect, useState } from "react";
import FleetService from "../../fleetService.js";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [address, setAddress] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  useEffect(() => {
    async function fetchData() {
      const locations = await FleetService.getLocations();
      setLocations(locations);
    }
    fetchData();
  }, []);

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeLatitude = (e) => {
    setLatitude(e.target.value);
  };

  const handleChangeLongitude = (e) => {
    setLongitude(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (address == '' || latitude == '' || longitude == '') {
      console.log('here')
      return;
    }

    FleetService.addLocation(address, latitude, longitude).then((data) => {
      if (data) {
        setLocations([...locations, data]);
      }
    });
  };

  return (
    <>
      <div className="border-2 p-4 space-y-2">
        <h1 className="m-auto w-1/2">Locations</h1>
        <ul className="space-y-2">
          {locations.map((location) => {
            return (
              <li key={location.id} className="border p-2 border-black">
                <p>
                  latitude: {location.latitude}, longitude: {location.longitude}
                </p>
                <p>location_id: {location.id}</p>
                <p>address: {location.address}</p>
              </li>
            );
          })}
        </ul>

        <form onSubmit={handleSubmit} className="space-x-2">
          <input
            className="border p-2"
            type="text"
            placeholder="address"
            value={address || ""}
            onChange={handleChangeAddress}
          />
          <input
            className="border p-2"
            type="number"
            step="any"
            placeholder="latitude"
            value={latitude || ""}
            onChange={handleChangeLatitude}
          />
          <input
            className="border p-2"
            type="number"
            step="any"
            placeholder="longitude"
            value={longitude || ""}
            onChange={handleChangeLongitude}
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

export default Locations;
