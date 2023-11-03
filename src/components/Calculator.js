import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import * as math from "mathjs";
import '../App.css';

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleInputClick(value) {
    if (value === '√') {
      setInput((input) => [...input, 'sqrt(']);
    } else if (value === 'x!') {
      setInput((input) => [...input, '!']);
    } else if(value === 'x^Y'){
        setInput((input) => [...input, '^']);
    }else if(value === 'log'){
        setInput((input) => [...input, 'log('])
    }else if(value === 'π'){
        setInput((input) => [...input, 'pi'])
    }
    else {
      setInput((input) => [...input, value]);
    }
  }

  function performOperations() {
    const expression = input.join("");
    try {
        const expression1 = expression.replace(/sqrt\(([^)]+)\)/g, (_, content) => math.sqrt(parseFloat(content)));
        const expression2 = expression1.replace(/log\(([^)]+)\)/g, (_, content) => math.log10(parseFloat(content)));
        setResult(math.evaluate(expression2));
    } catch (error) {
      setResult("Error");
    }
  }

  function clearInput (){
    setInput("");
    setResult("");
  }

  return (

<div>
    <div className='calculator'>
        <Display input={input} result={result}/>
        <div className="buttons">
            <Button label="x!"  handleClick={handleInputClick}/>
            <Button label="("  handleClick={handleInputClick}/>
            <Button label=")"  handleClick={handleInputClick}/>
            <Button label="%"  handleClick={handleInputClick}/>
            <Button label="C"  handleClick={clearInput}/>
        </div>
        <div className="buttons">
            <Button label="√" handleClick={handleInputClick}/>
            <Button label="7" handleClick={handleInputClick}/>
            <Button label="8" handleClick={handleInputClick}/>
            <Button label="9" handleClick={handleInputClick}/>
            <Button label="/" handleClick={handleInputClick}/>
        </div>
        <div className="buttons">
            <Button label="log"handleClick={handleInputClick}/>
            <Button label="4"  handleClick={handleInputClick}/>
            <Button label="5"  handleClick={handleInputClick}/>
            <Button label="6"  handleClick={handleInputClick}/>
            <Button label="*"  handleClick={handleInputClick}/>
        </div>
        <div className="buttons">
            <Button label="π" handleClick={handleInputClick}/>
            <Button label="1"  handleClick={handleInputClick}/>
            <Button label="2"  handleClick={handleInputClick}/>
            <Button label="3"  handleClick={handleInputClick}/>
            <Button label="-"  handleClick={handleInputClick}/>
        </div>
        <div className="buttons">
            <Button label="x^Y"handleClick={handleInputClick}/>
            <Button label="0"  handleClick={handleInputClick}/>
            <Button label="."  handleClick={handleInputClick}/>
            <Button label="="  handleClick={performOperations}/>
            <Button label="+"  handleClick={handleInputClick}/>
        </div>
    </div>
</div>
  );
}
