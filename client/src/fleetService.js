import axios from 'axios'

const AUTH_URL = 'http://localhost:3000/auth'
const BASE_URL = 'http://localhost:3000/api/v1'

class FleetService {

  static setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  static removeAuthHeader = () => {
    delete axios.defaults.headers.common.Authorization;
  };

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

  static async loginUser(email, password) {
    try {
      const response = await axios.post(`${AUTH_URL}/login`, {email, password}) 
      sessionStorage.setItem('fleet_token', response.data.token)
      sessionStorage.setItem('fleet_user', JSON.stringify(response.data.user))
      this.setAuthHeader(response.data.token)
      return response.data.user
    }
    catch (error) {
      console.log(error);
      return null
    }
  }

  static signOutUser() {
      sessionStorage.removeItem('fleet_user')
      sessionStorage.removeItem('fleet_token')
      this.removeAuthHeader()
  }

  static async signUpUser(full_name, email, password) {
    try {
      const response = await axios.post(`${AUTH_URL}/signup`, {full_name, email, password}) 
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
      return []
    }
  }


  static async addLocation(address, latitude, longitude) {
    try {
      const response = await axios.post(`${BASE_URL}/locations`, {address, latitude, longitude}) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return null
    }
  }

  static async createPayment(machine_id) {
    try {
      const response = await axios.post(`${BASE_URL}/payments`, {machine_id}) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return null
    }
  }

  static async acceptPayment(id) {
    try {
      const response = await axios.put(`${BASE_URL}/payments/${id}`, {status: 'completed'}) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return null
    }
  }

  static async rejectPayment(id) {
    try {
      const response = await axios.put(`${BASE_URL}/payments/${id}`, {status: 'rejected'}) 
      return response.data
    }
    catch (error) {
      console.log(error);
      return null
    }
  }
  static async getOrders() {
    try {
      const response = await axios.get(`${BASE_URL}/payments`) 
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


