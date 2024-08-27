import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './InputForm';

function Form() {
  const [inputData, setInputData] = useState({
    number: '',
    date: '',
    mathNumber: '',
  })

  const [outputData, setOutputData] = useState({
    numberFact: '',
    dateFact: '',
    mathNumberFact: '',
  })

  const fetchData = async (e) => {
    setInputData({
        ...inputData,
        [e.target.name]: e.target.value
    });

    let url = 'http://numbersapi.com/';
    if(e.target.name === 'date') {
        const [month, day] = e.target.value.split('/')
        if(!month || !day) {
            return;
        }
        url += month + '/' + day + "/date"
    } else {
        if(!e.target.value) {
            return;
        }
        url += e.target.value;
    }
    const { data } = await axios.get(url);
    console.log(data)
    setOutputData({
        ...outputData,
        [`${e.target.name}Fact`]: data
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Fun Facts</h1>

         <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700">
            Enter a Number:
            <input
              type="number"
              value={inputData.number}
              name="number"
              onChange={(e) => fetchData(e)}
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter a number"
            />
          </label>
          {outputData.numberFact && <p className="mt-4 text-indigo-700">{outputData.numberFact}</p>}
        </div> 

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700">
            Enter a Date (MM/DD):
            <input
              type="text"
              value={inputData.date}
              name="date"
              onChange={(e) => fetchData(e)}
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter a date (MM/DD)"
            />
          </label>
          {outputData.dateFact && <p className="mt-4 text-indigo-700">{outputData.dateFact}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700">
            Enter a Number for Math Trivia:
            <input
              type="number"
              name="mathNumber"
              value={inputData.mathNumber}
              onChange={(e) => fetchData(e)}
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter a number"
            />
          </label>
          {outputData.mathNumberFact && <p className="mt-4 text-indigo-700">{outputData.mathNumberFact}</p>}
        </div> 


        
        
      
      </div>
    </div>
  );
}

export default Form;
