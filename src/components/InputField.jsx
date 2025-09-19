import React from 'react';

const InputField = ({ id, label, type, placeholder, value, onChange }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 dark:text-light-text">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-300 hover:border-primary-green/50 bg-white dark:bg-dark-card text-gray-800 dark:text-light-text text-lg"
        required
      />
    </div>
  );
};

export default InputField;