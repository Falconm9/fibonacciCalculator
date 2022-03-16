import React, { Fragment } from 'react';

const Textfield = (props) => {
  const {dataTestId, value, handleChange, placeholderLabel, className} = props;
  return (
    <Fragment>
        <input data-testid={dataTestId} className={className} placeholder={placeholderLabel} value={value} onChange={handleChange} />
    </Fragment>
  );
}

export default Textfield;
