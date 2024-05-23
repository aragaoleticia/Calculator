import React, { useState } from 'react';
import Button from './Button'
import OutputScreen from './OutputScreen';
import { evaluate } from "mathjs";

function Calculator() {

  const [input, setInput] = useState('');

  const handleClick = (event) => {
    const calculate = event.target.value;
    
    switch(calculate) {
      case '=': {
        if(input !== '') {
          try {
            const result = evaluate(input);
            setInput(result.toString());

          }catch(err){
            setInput('Math error');
          }
        }
        break
      }

      case 'AC': {
        setInput('');
        break
      }

      case 'Del': {
        setInput(prevInput => prevInput.slice(0,-1))
        break
      }

      default: {
        setInput(prevInput => prevInput += calculate);
        break
      }
    }

  }


  return (
    <div className='flex justify-center flex-col items-center mt-40 w-full h-full'>
    <OutputScreen answer={input}/>
    <div className='flex flex-1 flex-row gap-6 lg:pl-5 mt-5 w-400 justify-center bg-neutral-700'>
      
      <div>
        <Button handleClick={handleClick} label={'AC'}/>
        <Button handleClick={handleClick} label={'7'}/>
        <Button handleClick={handleClick} label={'4'}/>
        <Button handleClick={handleClick} label={'1'}/>
        <Button handleClick={handleClick} label={'0'}/>
      </div>
      <div>
        <Button handleClick={handleClick} label={'Del'}/>
        <Button handleClick={handleClick} label={'8'}/>
        <Button handleClick={handleClick} label={'5'}/>
        <Button handleClick={handleClick} label={'2'}/>
      </div>
      <div>
        <Button handleClick={handleClick} label={'%'}/>
        <Button handleClick={handleClick} label={'9'}/>
        <Button handleClick={handleClick} label={'6'}/>
        <Button handleClick={handleClick} label={'3'}/>
        <Button handleClick={handleClick} label={'.'}/>
      </div>
      <div>
        <Button handleClick={handleClick} label={'/'}/>
        <Button handleClick={handleClick} label={'*'}/>
        <Button handleClick={handleClick} label={'-'}/>
        <Button handleClick={handleClick} label={'+'}/>
        <Button handleClick={handleClick} label={'='}/>
      </div>

      </div>

    </div>
  
  )
}

export default Calculator;