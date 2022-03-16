import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Textfield = (props) => {
  const {dataTestId, value, handleChange, placeholderLabel, className} = props;
  return (
    <Fragment>
        <input data-testid={dataTestId} className={className} placeholder={placeholderLabel} value={value} onChange={handleChange} />
    </Fragment>
  );
}

Textfield.propTypes = {
  dataTestId: PropTypes.string,
  value: PropTypes.string,
  placeholderLabel: PropTypes.string,
  handleChange: PropTypes.func,
  className: PropTypes.string
}

export default Textfield;
