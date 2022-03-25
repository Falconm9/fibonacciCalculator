import React, { useState, useEffect } from 'react';
import Textfield from '../../components/input/Textfield';
import SimpleButton from '../../components/button/SimpleButton';
import TextLabel from '../../components/text/TextLabel';
import messages from './messages';

import { useFibonacci } from "../../contexts/fibonacci/FibonacciState";
import { getFibonacciValue } from "../../contexts/fibonacci/FibonacciActions";

function FibonacciCalculator() {
  const [fibonacciState, fibonacciDispatch] = useFibonacci();
  const [textfieldNumber, setTextfieldNumber] = useState('');
  const [time, setTime] = useState(1);
  const [start, setStart] = useState(false);
  const { fibonacciValue, errorMessage, loading} = fibonacciState;
  useEffect(() => {
    const stopInterval = (myInterval) => {
      clearInterval(myInterval)
      setStart(false)
      setTime(1);
    }

    let myInterval;
    if(start){
      myInterval = setInterval(async () => { 
        await getFibonacciValue(fibonacciDispatch, time) 
        setTime(time => time + 1);
      }, 1000 );
    }  
    if( time === (textfieldNumber + 1) || !start  ) {
      stopInterval(myInterval)
    }
    return () => clearInterval(myInterval);
  }, [fibonacciDispatch, start, textfieldNumber, time]);

  const handleChangeTextfield = evt => {
    const inputValue = Number(evt.target.value);
    if(Number.isInteger(inputValue) && inputValue >= 0  ){
      setTextfieldNumber(inputValue);
    }
  }

  const handleOnClick = async () => {
    await getFibonacciValue(fibonacciDispatch, textfieldNumber);
  }

  const manageChronomether = () => {
    setStart(!start);
  }
   
  const diabledButton = textfieldNumber !== '' && !start ? false : true
  return (
    <div className="fibonacciCalc">
      <TextLabel dataTestId="fiboTitle" className="titleText" text={messages.title}/>
      <Textfield
       dataTestId="fiboInput"
        className="fibonacciComponent"
        placeholderLabel={messages.inputPlaceHolder}
        value={textfieldNumber}
        handleChange={handleChangeTextfield}
      />

      <SimpleButton
        dataTestId="fiboButton"
        className="fibonacciComponent"
        placeholderText={messages.buttonText}
        handleOnClick={handleOnClick}
        disabled={diabledButton}
        loadingAPICall={loading}
      />

      <SimpleButton
        dataTestId="clearInterval"
        className="fibonacciComponent"
        placeholderText={!start ? "Start Chronometer" : "stop Chronometer"}
        handleOnClick={manageChronomether}
        disabled={diabledButton || loading}
        loadingAPICall={start}
      />

      <div>
        <TextLabel dataTestId="fiboResult" className="smallText" text={messages.result}/>
        <TextLabel dataTestId="fiboResultNumber" className="resultText" text={fibonacciValue} />
      </div>
      <TextLabel dataTestId="fiboErrorMessage" className="errorText" text={errorMessage} />
    </div>
  );
}

export default FibonacciCalculator;
