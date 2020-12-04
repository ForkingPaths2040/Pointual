import api from './apiConfig'

export const getInfractions = async (id) => {
  try {
    const response = await api.get(`/employees/${id}`)
    return response.data.infractions
  } catch (error) {
    throw error
  }
}

export const deleteInfraction = async (id, id2) => {
  try {
    const response = await api.delete(`/employees/${id}/infractions/${id2}`)
      return response.data
  } catch (error) {
    throw error
  }
}