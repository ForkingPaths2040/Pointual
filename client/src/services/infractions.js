import api from './apiConfig'

export const getInfractions = async (id) => {
  try {
    const response = await api.get(`/employees/${id}`)
    return response.data.infractions
  } catch (error) {
    throw error
  }
}