import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isEngineeringMode, setEngineeringMode] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'Mode') {
      setEngineeringMode((prevMode) => !prevMode);
    } else if (value === '(') {
      setInput(input + '(');
    } else if (value === ')') {
      setInput(input + ')');
    } else if (value === 'sin') {
      setInput(input + 'Math.sin(');
    } else if (value === 'cos') {
      setInput(input + 'Math.cos(');
    } else if (value === 'tan') {
      setInput(input + 'Math.tan(');
    } else if (value === 'sqrt') {
      setResult(Math.sqrt(eval(input)));
    } else if (value === 'square') {
      setResult(Math.pow(eval(input), 2));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        readOnly
      />
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '=', '+'].map(
          (value) => (
            <button
              key={value}
              className={`button ${isNaN(value) && value !== '.' ? 'operator' : ''}`}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          )
        )}
        <button
          className="button"
          onClick={() => handleButtonClick('Mode')}
        >
          {isEngineeringMode ? 'Basic' : 'Engineering'}
        </button>
        {isEngineeringMode && (
          <>
            <button className="button" onClick={() => handleButtonClick('sin')}>sin</button>
            <button className="button" onClick={() => handleButtonClick('cos')}>cos</button>
            <button className="button" onClick={() => handleButtonClick('tan')}>tan</button>
            <button className="button" onClick={() => handleButtonClick('sqrt')}>√</button>
            <button className="button" onClick={() => handleButtonClick('square')}>x²</button>
          </>
        )}
        <button className="button" onClick={() => handleButtonClick('(')}>(</button>
        <button className="button" onClick={() => handleButtonClick(')')}>)</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Calculator;
