import React, { useState } from 'react';
import Button from './Button'
import { evaluate } from "mathjs";
import OutputScreenRow from './OutputScreenRow';

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
    <div className='flex justify-center flex-col items-center  rounded-md mt-40 box-content h-50 w-50 p-4'>
      <div className='bg-stone-100 rounded-lg border-2 border-black'>
      <OutputScreenRow answer={input}/>
      <div className='flex flex-1 flex-row gap-6 py-12 rounded-lg lg:pl-5 mt-5 p-4 w-400 justify-center bg-stone-200'>
        
        <div>
          <Button handleClick={handleClick} label={'AC'} className='bg-rose-100 text-rose-500 hover:bg-rose-200 shadow-lg'/>
          <Button handleClick={handleClick} label={'7'}/>
          <Button handleClick={handleClick} label={'4'}/>
          <Button handleClick={handleClick} label={'1'}/>
          <Button handleClick={handleClick} label={'0'}/>
        </div>
        <div>
          <Button handleClick={handleClick} label={'Del'} className='bg-rose-100 text-rose-500 hover:bg-rose-200 shadow-lg'/>
          <Button handleClick={handleClick} label={'8'}/>
          <Button handleClick={handleClick} label={'5'}/>
          <Button handleClick={handleClick} label={'2'}/>
          <Button handleClick={handleClick} label={'.'}/>
        </div>
        <div>
          <Button handleClick={handleClick} label={'%'} className='bg-rose-100 text-rose-500 hover:bg-rose-200 shadow-lg'/>
          <Button handleClick={handleClick} label={'9'}/>
          <Button handleClick={handleClick} label={'6'}/>
          <Button handleClick={handleClick} label={'3'}/>
          <Button handleClick={handleClick} label={'='} className='absolute pr-24 pl-24 bg-rose-400 text-white hover:bg-rose-300 text-center shadow-lg'/>
          
        </div>
        <div>
          <Button handleClick={handleClick} label={'/'} className='bg-rose-100 text-rose-500 hover:bg-rose-200 shadow-lg'/>
          <Button handleClick={handleClick} label={'*'} className='bg-rose-100 text-rose-500 hover:bg-rose-200 shadow-lg'/>
          <Button handleClick={handleClick} label={'-'} className='bg-rose-100 text-rose-500 hover:bg-rose-200 shadow-lg'/>
          <Button handleClick={handleClick} label={'+'} className='bg-rose-100 text-rose-500 hover:bg-rose-200 shadow-lg'/>
          
        </div>

      </div>


      </div>
    </div>
  
  )
}

export default Calculator;