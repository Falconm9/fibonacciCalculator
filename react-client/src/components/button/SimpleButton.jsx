import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

SimpleButton.propTypes = {
  dataTestId: PropTypes.string,
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
  placeholderText: PropTypes.string,
  disabled: PropTypes.bool,
  loadingAPICall: PropTypes.bool
}

export default SimpleButton;
