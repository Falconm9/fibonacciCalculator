import React from "react";
import PropTypes from 'prop-types';

const TextLabel = ({ dataTestId, className, text }) => {
  return <h1 data-testid={dataTestId} className={className}>{text}</h1>;
};

TextLabel.propTypes = {
  dataTestId: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string
}


export default TextLabel;
