import axios from "axios";

export const fetchNumberFact = (number) => {
  return axios
    .get(`http://numbersapi.com/${number}`)
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching number fact:", error));
};

export const fetchDateFact = (month, day) => {
  return axios
    .get(`http://numbersapi.com/${month}/${day}/date`)
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching date fact:", error));
};

export const fetchMathTrivia = (number) => {
  return axios
    .get(`http://numbersapi.com/${number}/math`)
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching math trivia:", error));
};
