import React, { useRef, useState } from "react";
import { fetchDateFact, fetchMathTrivia, fetchNumberFact } from "../api";

const NumberForm = () => {
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [mathNumber, setMathNumber] = useState("");
  const [numberFact, setNumberFact] = useState("");
  const [dateFact, setDateFact] = useState("");
  const [mathFact, setMathFact] = useState("");

  const previousNumber = useRef("");
  const previousDate = useRef("");
  const previousMathNumber = useRef("");
  const numberTimeoutRef = useRef(null);
  const dateTimeoutRef = useRef(null);
  const mathTimeoutRef = useRef(null);

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (/^-?\d*$/.test(value) || value === "") {
      setNumber(value);
      if (value.length > previousNumber.current.length) {
        if (numberTimeoutRef.current) {
          clearTimeout(numberTimeoutRef.current);
        }
        if (value) {
          numberTimeoutRef.current = setTimeout(() => {
            fetchNumberFact(value).then(setNumberFact);
          }, 2000);
        } else {
          setNumberFact("");
        }
      } else {
        setNumberFact("");
      }
      previousNumber.current = value;
    } else {
      alert("Please enter a valid integer");
    }
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    const [month, day] = value.split("/").map(Number);
    setDate(value);
    if (month > 0 && month < 13 && day > 0 && day < 32) {
      if (value.length > previousDate.current.length) {
        if (dateTimeoutRef.current) {
          clearTimeout(dateTimeoutRef.current);
        }
        if (month && day) {
          dateTimeoutRef.current = setTimeout(() => {
            fetchDateFact(month, day).then(setDateFact);
          }, 2000);
        } else {
          setDateFact("");
        }
        previousDate.current = value;
      } else {
        setDateFact("");
      }
    } else {
      if (month && day) {
        setDate("");
        alert("Enter a valid date in MM/DD format");
      }
      setDateFact("");
    }
  };

  const handleMathNumberChange = (e) => {
    const value = e.target.value;
    if (/^-?\d*$/.test(value) || value === "") {
      setMathNumber(value);
      if (value.length > previousMathNumber.current.length) {
        if (mathTimeoutRef.current) {
          clearTimeout(mathTimeoutRef.current);
        }
        if (value) {
          mathTimeoutRef.current = setTimeout(() => {
            fetchMathTrivia(value).then(setMathFact);
          }, 2000);
        } else {
          setMathFact("");
        }
      } else {
        setMathFact("");
      }
      previousMathNumber.current = value;
    } else {
      alert("Please enter a valid integer");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="mb-5">
        <label className="block mb-2 text-lg font-semibold">
          Enter a Number for a Fun Fact
        </label>
        <input
          type="text"
          value={number}
          onChange={handleNumberChange}
          className="border border-gray-400 p-2 rounded w-full"
          placeholder="Enter a number"
        />
        <p className="mt-2 text-gray-700">{numberFact}</p>
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-lg font-semibold">
          Enter a Date (MM/DD)
        </label>
        <input
          type="text"
          value={date}
          onChange={handleDateChange}
          className="border border-gray-400 p-2 rounded w-full"
          placeholder="MM/DD"
        />
        <p className="mt-2 text-gray-700">{dateFact}</p>
      </div>

      <div>
        <label className="block mb-2 text-lg font-semibold">
          Enter a Number for Math Trivia
        </label>
        <input
          type="text"
          value={mathNumber}
          onChange={handleMathNumberChange}
          className="border border-gray-400 p-2 rounded w-full"
          placeholder="Enter a number"
        />
        <p className="mt-2 text-gray-700">{mathFact}</p>
      </div>
    </div>
  );
};

export default NumberForm;
