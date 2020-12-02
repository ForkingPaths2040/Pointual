import api from './apiConfig'

export const getEmployees = async () => {
  try {
      const response = await api.get('/employees')
      return response.data
  } catch (error) {
      throw error
  }
}