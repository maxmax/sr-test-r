import React from 'react';

export default ({className, text, label}) => {
  return (
    <div>
      <div className={'item ' + className}>
        <span className="icon"></span>
        <span className="text">{text}</span>
        <span className="label">{label}</span>
      </div>
    </div>
  );
};
