import api from './api-instance';

export const getApiCall = async (id: string,url:string) => {
  const response = await api.get(`/${url}/${id}`);
  return response.data;
};

export const postApiCall = async (payload: any,url:string) => {
  console.log("PAYLOAD",payload)
  const response = await api.post(`/${url}`, payload);
  return response.data;
};