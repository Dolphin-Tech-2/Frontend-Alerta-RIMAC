import { instanseAxios } from "./useAxios.js";

export const getByStatus = async () => {
  try {
    const { data } = await instanseAxios.get(`/eventos/get_eventos_by_state`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (id) => {
  try {
    const { data } = await instanseAxios.get(`/eventos/get_evento/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};