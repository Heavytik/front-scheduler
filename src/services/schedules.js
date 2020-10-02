import axios from 'axios'

const baseUrl = '/api/scheludes'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getSchedules = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const update = async (schedule) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(`${baseUrl}/${schedule.id}`, schedule, config)
  return response
}

const post = async (schedule) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}`, schedule, config)
  return response
}

const remove = async (schedule) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${schedule.id}`, config)
  return response
}

export default { getSchedules, update, post, remove, setToken }
