import React from "react";

const TextLabel = ({ dataTestId, className, text }) => {
  return <h1 data-testid={dataTestId} className={className}>{text}</h1>;
};


export default TextLabel;
