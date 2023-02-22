import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/v1'

class FleetService {
  static async getMachines() {
    try {
      const response = await axios.get(`${BASE_URL}/machines`) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return null
    }
  }

  static async addMachine(location_id) {
    try {
      const response = await axios.post(`${BASE_URL}/machines`, {location_id}) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return null
    }
  }

  static async getLocations() {
    try {
      const response = await axios.get(`${BASE_URL}/locations`) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return null
    }
  }


  static async getUsers() {
    try {
      const response = await axios.get(`${BASE_URL}/users`) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return null
    }
  }
}

export default FleetService


