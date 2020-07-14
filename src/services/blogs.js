import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async dataObject => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, dataObject, config)
  console.log(response.data)
  return response.data
}

const update = (id, dataObject) => {
  const request = axios.put(`${baseUrl}/${id}`, dataObject)
  return request.then(response => response.data)
}
export default { getAll, create, update, setToken }