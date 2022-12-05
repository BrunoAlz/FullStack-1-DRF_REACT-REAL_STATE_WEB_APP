import axios from 'axios';

const getProperties = async () => {
  const response = await axios.get("/api/v1/properties/list/");
  return response.data;
};

const propertyAPIService = { getProperties };
export default propertyAPIService;