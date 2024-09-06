

import React from "react";

const InputBox = ({ label, value, onChange, onBlur, placeholder, fact, error,ringColor }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onBlur();
    }
  };
  return (
    <div className="mb-5">
      <label className="block mb-2 text-lg font-semibold">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={handleKeyDown} 
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
        placeholder={placeholder}
        ringColor={ringColor}
      />
      {fact && <p className="mt-2 text-gray-700">{fact}</p>}
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
};

export default InputBox;



