import React, { useState, useEffect } from 'react';
import Textfield from '../../components/input/Textfield';
import SimpleButton from '../../components/button/SimpleButton';
import TextLabel from '../../components/text/TextLabel';
import messages from './messages';

import { useFibonacci } from "../../contexts/fibonacci/FibonacciState";
import { getCounter } from "../../contexts/fibonacci/FibonacciActions";

function FibonacciCalculator() {
  const [fibonacciState, fibonacciDispatch] = useFibonacci();
  const [textfieldNumber, setTextfieldNumber] = useState('');
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const { fibonacciValue, errorMessage} = fibonacciState;
  useEffect(() => {
    let myInterval;
    if(start){
      myInterval = setInterval(async () => { 
        await getCounter(fibonacciDispatch, time) 
        setTime(time => time + 1);
      }, 1000 );
    }  
    if( time === textfieldNumber+1) {
      clearInterval(myInterval)
      setStart(false)
      setTime(0);
    }
    return () => clearInterval(myInterval);
  }, [fibonacciDispatch, start, textfieldNumber, time]);

  const handleChangeTextfield = evt => {
    const inputValue = Number(evt.target.value);
    if(Number.isInteger(inputValue) && inputValue >= 0  ){
      setTextfieldNumber(inputValue);
    }
  }

  const manageChronomether = () => {
    setStart(!start);
  }
  const diabledButton = textfieldNumber !== ''  ? false : true
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
        dataTestId="clearInterval"
        className="fibonacciComponent"
        placeholderText={!start ? "Start Chronometer" : "stop Chronometer"}
        handleOnClick={manageChronomether}
        disabled={diabledButton}
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
