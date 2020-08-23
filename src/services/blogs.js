
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'

let token = null

export const setToken = newToken => {
  token = `bearer ${newToken}`
}

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const getById = async id => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export const create = async dataObject => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, dataObject, config)
  console.log('response data:', response.data)
  return response.data
}

export const update = async (dataObject) => {
  const response = await axios.put(`${baseUrl}/${dataObject.id}`, dataObject)
  // console.log(request)
  return response
}

export const deleteBlog = async id => {
  await axios.delete(`${baseUrl}/${id}`)
}
