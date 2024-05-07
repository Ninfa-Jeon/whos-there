const getAgeUrl = (name) => `https://api.agify.io/?name=${name}`;
const getGenderUrl = (name) => `https://api.genderize.io/?name=${name}`;
const getNationalityUrl = (name) => `https://api.nationalize.io/?name=${name}`;

const apiConfig = {
  getAgeUrl,
  getGenderUrl,
  getNationalityUrl,
};

export default apiConfig;
