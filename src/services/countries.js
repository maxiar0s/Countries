import axios from "axios";
const cors = require("cors");

app.use(cors());

const baseUrlAll = "https://studies.cs.helsinki.fi/restcountries/api/all";
//const baseUrlName = "https://studies.cs.helsinki.fi/restcountries/api/name/";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="; //{city name}&appid={API key}
const api_key = import.meta.env.VITE_SOME_KEY;

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const getAll = () => {
  const request = axios.get(baseUrlAll);
  return request.then((response) => response.data);
};

// const getWeather = (city) => {
//   const request = axios.get(weatherUrl + city + "&appid=" + api_key);
//   return request.then((response) => response.data);
// };

export default { getAll };
