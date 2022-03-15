import React, { useState } from 'react';
import Textfield from '../../components/input/Textfield';
import SimpleButton from '../../components/button/SimpleButton';
import TextLabel from '../../components/text/TextLabel';
import messages from './messages';

function FibonacciCalculator() {
  const [textfieldNumber, setTextfieldNumber] = useState('');

  const handleChangeTextfield = evt => {
    const inputValue = Number(evt.target.value);
    if(Number.isInteger(inputValue) && inputValue >= 0  ){
      setTextfieldNumber(inputValue);
    }
  }

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
      />

      <div>
        <TextLabel className="smallText" text={messages.result}/>
        <TextLabel className="resultText" text={9} />
      </div>
    </div>
  );
}

export default FibonacciCalculator;
