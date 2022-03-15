import React, { Fragment } from 'react';

const Textfield = ({value, handleChange, placeholderLabel, className}) => {
  return (
    <Fragment>
        <input className={className} placeholder={placeholderLabel} value={value} onChange={handleChange} />
    </Fragment>
  );
}

export default Textfield;
