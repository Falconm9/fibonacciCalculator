import React, { useState } from 'react';
import Textfield from '../../components/input/Textfield';
import SimpleButton from '../../components/button/SimpleButton';
import TextLabel from '../../components/text/TextLabel';
import messages from './messages';

import { useFibonacci } from "../../contexts/fibonacci/FibonacciState";
import { getFibonacciValue } from "../../contexts/fibonacci/FibonacciActions";

function FibonacciCalculator() {
  const [fibonacciState, fibonacciDispatch] = useFibonacci();
  const [textfieldNumber, setTextfieldNumber] = useState('');

  const { fibonacciValue, errorMessage, loading } = fibonacciState;

  const handleChangeTextfield = evt => {
    const inputValue = Number(evt.target.value);
    if(Number.isInteger(inputValue) && inputValue >= 0  ){
      setTextfieldNumber(inputValue);
    }
  }

  const handleOnClick = async () => {
    await getFibonacciValue(fibonacciDispatch, textfieldNumber);
  }
  const diabledButton = textfieldNumber !== '' && !loading ? false : true
  return (
    <div className="fibonacciCalc">
      <TextLabel className="titleText" text={messages.title}/>
      <Textfield
        className="fibonacciComponent"
        placeholderLabel={messages.inputPlaceHolder}
        value={textfieldNumber}
        handleChange={handleChangeTextfield}
      />
      <SimpleButton 
        className="fibonacciComponent"
        placeholderText={messages.buttonText}
        handleOnClick={handleOnClick}
        disabled={diabledButton}
        loadingAPICall={loading}
      />

      <div>
        <TextLabel className="smallText" text={messages.result}/>
        <TextLabel className="resultText" text={fibonacciValue} />
      </div>
      <TextLabel className="errorText" text={errorMessage} />
    </div>
  );
}

export default FibonacciCalculator;
