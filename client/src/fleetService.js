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
      return []
    }
  }

  static async getLocations() {
    try {
      const response = await axios.get(`${BASE_URL}/locations`) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return []
    }
  }


  static async getUsers() {
    try {
      const response = await axios.get(`${BASE_URL}/users`) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return []
    }
  }
}

export default FleetService


