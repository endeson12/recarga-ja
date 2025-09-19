import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  shadow = 'shadow-sm',
  onClick 
}) => {
  const baseClasses = 'bg-white dark:bg-dark-card rounded-xl border border-gray-100 dark:border-gray-700 transition-all duration-200';
  const interactiveClasses = onClick ? 'cursor-pointer hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600' : '';
  
  const classes = `${baseClasses} ${padding} ${shadow} ${interactiveClasses} ${className}`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;