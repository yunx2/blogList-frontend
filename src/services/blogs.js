import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

export const setToken = newToken => {
  token = `bearer ${newToken}`
}

export const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export const create = async dataObject => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, dataObject, config)
  console.log('response data:', response.data)
  return response.data
}

export const update = (id, dataObject) => {
  const request = axios.put(`${baseUrl}/${id}`, dataObject)
  return request.then(response => response.data)
}

export const deleteBlog = id => {
  axios.delete(`${baseUrl}/${id}`)
}