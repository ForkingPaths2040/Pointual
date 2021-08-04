import api from "./apiConfig";

export const getInfractions = async (id) => {
  try {
    const response = await api.get(`/employees/${id}`);
    return response.data.infractions;
  } catch (error) {
    throw error;
  }
};

// export const getAllInfractions = async () => {
//   try {
//     const response = await api.get(`/infractions`);
//     return response.data.infractions;
//   } catch (error) {
//     throw error;
//   }
// };

export const deleteInfraction = async (id, id2) => {
  try {
    const response = await api.delete(`/employees/${id}/infractions/${id2}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postInfraction = async (id, formData) => {
  try {
    const response = await api.post(`/employees/${id}/infractions`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putInfraction = async (id, id2, infractionData) => {
  try {
    const response = await api.put(`/employees/${id}/infractions/${id2}`, {
      infraction: infractionData,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
