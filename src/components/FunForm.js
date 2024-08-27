import React, { useState, useEffect } from "react";
import { fetchNumberFact } from "./serviceApi";
import InputForm from "./InputForm";

function FunForm() {
  const [inputData, setInputData] = useState({
    number: "",
    date: "",
    mathNumber: "",
  });

  const [outputData, setOutputData] = useState({
    numberFact: "",
    dateFact: "",
    mathNumberFact: "",
  });

  const handleInputChange = e => {
    e.preventDefault();

    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value
    });

    
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Number Facts
        </h1>

        <InputForm
          label="Enter a Number:"
          name="number"
          type="text"
          value={inputData.number}
          onChange={handleInputChange}
          output={outputData.numberFact}
        />

        <InputForm
          label="Enter a Date (MM/DD):"
          name="date"
          type="text"
          value={inputData.date}
          onChange={handleInputChange}
          output={outputData.dateFact}
        />

        <InputForm
          label="Enter a Number for Math Trivia:"
          name="mathNumber"
          type="text"
          value={inputData.mathNumber}
          onChange={handleInputChange}
          output={outputData.mathNumberFact}
        />
      </div>
    </div>
  );
}

export default FunForm;
