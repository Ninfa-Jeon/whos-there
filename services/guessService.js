import apiConfig from "../config/api/apiConfig";
import httpService from "../utils/httpService";

const getAge = async ({ name }) => {
  const response = await httpService.get(apiConfig.getAgeUrl(name));

  return response;
};

const getGender = async ({ name }) => {
  const response = await httpService.get(apiConfig.getGenderUrl(name));

  return response;
};

const getNationality = async ({ name }) => {
  const response = await httpService.get(apiConfig.getNationalityUrl(name));

  return response;
};

const guessService = {
  getAge,
  getGender,
  getNationality,
};

export default guessService;
