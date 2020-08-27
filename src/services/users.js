import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users'

export const getUsers = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}