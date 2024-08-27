import axios from 'axios';

export const fetchNumberFact = async (type, value) => {
  let url = 'http://numbersapi.com/';

  if (type === 'date') {
    const [month, day] = value.split('/');
    if (!month || !day) {
      return null;
    }
    url += `${month}/${day}/date`;
  } else if (type === 'mathNumber') {
    if (!value) {
      return null;
    }
    url += `${value}/math`;
  } else {
    if (!value) {
      return null;
    }
    url += value;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
