import React from 'react';

export default ({title, text, label, img, type, qu}) => {
  return (
    <div className={"thumb " + type}>
      <div className="media">
        <span className="label">{label}</span>
        <img src={img} alt={title} />
        <span className="qu"><span>{qu}</span> шт.</span>
      </div>
      <div className="caption">
        <h3>{title}</h3>
        <p title={text}>{text}</p>
      </div>
    </div>
  );
};
