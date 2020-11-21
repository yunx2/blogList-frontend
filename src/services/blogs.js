
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

export const update = async blog => {
  const response = await axios.put(`${baseUrl}/${blog.id}`, blog)
  console.log('responseData:', response.data)
  return response.data
}

export const deleteBlog = async id => {
  await axios.delete(`${baseUrl}/${id}`)
}

export const addNewComment = async blog => {
  const response = await axios.post(`${baseUrl}/${blog.id}/comments`, blog);
  console.log('updated comments:', JSON.stringify(response.data.comments));
  return response.data;
}