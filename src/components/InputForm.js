import React from 'react';

function InputForm({ label, name, type, value, onChange, output}) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-gray-700">
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder={`Enter a ${name}`}
        />
      </label>
      {output && <p className="mt-4 text-indigo-700">{output}</p>}
    </div>
 );
}

export default InputForm;