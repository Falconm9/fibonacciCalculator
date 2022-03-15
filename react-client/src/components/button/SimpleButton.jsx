import React, { Fragment } from 'react';

const SimpleButton = ({className, handleOnClick, placeholderText}) => {
  return (
    <Fragment>
      <button
          className={className}
          onClick={handleOnClick}
      >
          {placeholderText}
      </button>
    </Fragment>
  );
}

export default SimpleButton;
