import React from "react";
import InputBox from "./InputBox";
import { useNumberInput, useDateInput, useMathInput } from "./InputHandlers";

const MainForm = () => {
  const {
    number,
    numberFact,
    numberError,
    handleNumberChange,
    handleNumberBlur,
  } = useNumberInput();

  const { date, dateFact, dateError, handleDateChange, handleDateBlur } =
    useDateInput();

  const {
    mathNumber,
    mathFact,
    mathError,
    handleMathNumberChange,
    handleMathNumberBlur,
  } = useMathInput();

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Number Facts
        </h1>
        <InputBox
          label="Enter a Number for a Fun Fact"
          value={number}
          onChange={handleNumberChange}
          onBlur={handleNumberBlur}
          placeholder="Enter a number"
          fact={numberFact}
          error={numberError}
          ringColor="focus:ring-pink-300"
        />
        <InputBox
          label="Enter a Date (MM/DD)"
          value={date}
          onChange={handleDateChange}
          onBlur={handleDateBlur}
          placeholder="MM/DD"
          fact={dateFact}
          error={dateError}
          ringColor="focus:ring-orange-300"
        />
        <InputBox
          label="Enter a Number for Math Trivia"
          value={mathNumber}
          onChange={handleMathNumberChange}
          onBlur={handleMathNumberBlur}
          placeholder="Enter a number"
          fact={mathFact}
          error={mathError}
          ringColor="focus:ring-yellow-300"
        />
      </div>
    </div>
  );
};

export default MainForm;
