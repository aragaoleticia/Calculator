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
    <div className='flex justify-center flex-col items-center mt-40 box-content h-50 w-50 p-4'>
      <div className='bg-neutral-800 p-7'>
      <OutputScreen answer={input}/>
      <div className='flex flex-1 flex-row gap-6 lg:pl-5 mt-5 p-4 w-400 justify-center'>
        
        <div>
          <Button handleClick={handleClick} label={'AC'} className='bg-red-500 hover:bg-red-600'/>
          <Button handleClick={handleClick} label={'7'} className='bg-neutral-600 hover:bg-neutral-400'/>
          <Button handleClick={handleClick} label={'4'} className='bg-neutral-600 hover:bg-neutral-400'/>
          <Button handleClick={handleClick} label={'1'} className='bg-neutral-600 hover:bg-neutral-400'/>
          <Button handleClick={handleClick} label={'0'} className='absolute pr-40 bg-neutral-600 hover:bg-neutral-400'/>
        </div>
        <div>
          <Button handleClick={handleClick} label={'Del'} className='bg-zinc-400 hover:bg-zinc-500'/>
          <Button handleClick={handleClick} label={'8'} className='bg-neutral-600 hover:bg-neutral-400'/>
          <Button handleClick={handleClick} label={'5'} className='bg-neutral-600 hover:bg-neutral-400'/>
          <Button handleClick={handleClick} label={'2'} className='bg-neutral-600 hover:bg-neutral-400'/>
        </div>
        <div>
          <Button handleClick={handleClick} label={'%'} className='bg-zinc-400 hover:bg-zinc-500'/>
          <Button handleClick={handleClick} label={'9'} className='bg-neutral-600 hover:bg-neutral-400'/>
          <Button handleClick={handleClick} label={'6'} className='bg-neutral-600 hover:bg-neutral-400'/>
          <Button handleClick={handleClick} label={'3'} className='bg-neutral-600 hover:bg-neutral-400'/>
          <Button handleClick={handleClick} label={'.'} className='bg-neutral-600 hover:bg-neutral-400'/>
        </div>
        <div>
          <Button handleClick={handleClick} label={'/'} className='bg-orange-500 hover:bg-orange-300'/>
          <Button handleClick={handleClick} label={'*'} className='bg-orange-500 hover:bg-orange-300'/>
          <Button handleClick={handleClick} label={'-'} className='bg-orange-500 hover:bg-orange-300'/>
          <Button handleClick={handleClick} label={'+'} className='bg-orange-500 hover:bg-orange-300'/>
          <Button handleClick={handleClick} label={'='} className='bg-orange-500 hover:bg-orange-300'/>
        </div>

      </div>


      </div>
    </div>
  
  )
}

export default Calculator;