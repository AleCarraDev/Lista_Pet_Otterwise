import client from "../providers/client";

export const getPets = () => {
  const api_code = process.env.REACT_APP_API_CODE;

  const response = client.get(`/pets/${"0sq87yq"}`);

  return response;
};

export const postPet = (data) => {
  const api_code = process.env.REACT_APP_API_CODE;

  const response = client.post(`/pets/${"0sq87yq"}`, data);

  return response;
};
