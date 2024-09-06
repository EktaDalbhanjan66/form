import axios from "axios";

export const fetchNumberFact = async(number) => {
  try{
  const response =await axios.get(`http://numbersapi.com/${number}`)
  return  response.data
  } catch(error){
    console.error("Error fetching number fact:", error)

  }
  };

export const fetchDateFact = async(month, day) => {
  try{
    const response =await axios.get(`http://numbersapi.com/${month}/${day}/date`)
    return  response.data
    } catch(error){
      console.error("Error fetching date fact:", error)
      return "No fact available";
    }
  
};

export const fetchMathTrivia = async(number) => {
  try{
    const response = await axios.get(`http://numbersapi.com/${number}/math`)
    return  response.data
    } catch(error){
      console.error("Error fetching date fact:", error)
      return "No fact available";
    }

};
