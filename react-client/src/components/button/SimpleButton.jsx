import React, { Fragment } from 'react';

const SimpleButton = (props) => {
  const {dataTestId, className, handleOnClick, placeholderText, disabled, loadingAPICall} = props;
  return (
    <Fragment>
      <button
        data-testid={dataTestId}
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
