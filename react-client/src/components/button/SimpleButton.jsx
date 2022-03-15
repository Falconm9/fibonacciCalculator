import React, { Fragment } from 'react';

const SimpleButton = ({className, handleOnClick, placeholderText, disabled, loadingAPICall}) => {
  return (
    <Fragment>
      <button
          className={className}
          onClick={handleOnClick}
          disabled={disabled}
      >
          { !loadingAPICall ? 
            placeholderText
            :
            <i className="fa fa-circle-o-notch fa-spin" />
          }
      </button>
    </Fragment>
  );
}

export default SimpleButton;
