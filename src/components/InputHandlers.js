import { fetchDateFact, fetchMathTrivia, fetchNumberFact } from "../api/api";
import { useState } from "react";

export const useNumberInput = () => {
  const [number, setNumber] = useState("");
  const [numberFact, setNumberFact] = useState("");
  const [numberError, setNumberError] = useState("");

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);

    if (value === "") {
      setNumberFact("");
      setNumberError("");
    } else if (/[^0-9]/.test(value)) {
      setNumber(value);
      setNumberError(
        `Please enter a valid whole number without alphabets or special characters. `
      );

    } else {
      setNumber(value);
      setNumberError("");
    }
  };

  const handleNumberBlur = async () => {
    if (number) {
      const data = await fetchNumberFact(number);
      setNumberFact(data);
    } else {
    //   setNumberError("Please enter a valid input");
      setNumberFact("");
    }
  };

  return { number, numberFact, numberError, handleNumberChange, handleNumberBlur };
};

export const useDateInput = () => {
  const [date, setDate] = useState("");
  const [dateFact, setDateFact] = useState("");
  const [dateError, setDateError] = useState("");

  const dateMap = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  const handleDateChange = (e) => {
    const value = e.target.value.trim();
    setDate(value);

    if (value === "") {
      setDateFact("");
      setDateError("");
    }

    const validCharsPattern = /^[0-9/]*$/;

    if (!validCharsPattern.test(value)) {
      setDateError(
        "Special characters and alphabets not allowed, please refer to the format in the label."
      );
      return;
    }
    if (value.length > 5) {
      setDateError("Invalid Date Format.");
      return;
    }
    setDateError("");
  };

  const handleDateBlur = async () => {
    if (date === "") {
        // No need to validate or fetch data if the date is empty
        setDateFact("");
        setDateError("");
        return;
      }
    let [month, day] = date.split("/").map(Number);

    const datePattern = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])$/;

    if (!datePattern.test(date) ) {
      setDateError(
        `Enter a valid month and day in the format MM/DD. You entered: ${date}`
      );
      return;
    }

    if (day > dateMap[month]) {
      setDateError(
        `Enter a valid day for the given month. There is no ${day} day in the ${month} month`
      );
      return;
    }

    setDateError("");

    if (month && day) {
      if (month < 10) {
        month = `0${month}`;
      }
      if (day < 10) {
        day = `0${day}`;
      }
      const data = await fetchDateFact(month, day);
      setDateFact(data);
    } else {
      setDateFact("");
    }
  };

  return { date, dateFact, dateError, handleDateChange, handleDateBlur };
};

export const useMathInput = () => {
  const [mathNumber, setMathNumber] = useState("");
  const [mathFact, setMathFact] = useState("");
  const [mathError, setMathError] = useState("");

  const handleMathNumberChange = (e) => {
    const value = e.target.value;
    setMathNumber(value);

    if (value === "") {
      setMathFact("");
      setMathError("");
    } else if (/[^0-9]/.test(value)) {
      setMathNumber("");
      setMathError(
        `Please enter a valid whole number without alphabets or special characters. You entered: ${value}`
      );
    } else {
      setMathNumber(value);
      setMathError("");
    }
  };

  const handleMathNumberBlur = async () => {
    if (mathNumber) {
      const data = await fetchMathTrivia(mathNumber);
      setMathFact(data);
    } else {
    //   setMathError("Please enter a valid input");
      setMathFact("");
    }
  };

  return { mathNumber, mathFact, mathError, handleMathNumberChange, handleMathNumberBlur };
};
