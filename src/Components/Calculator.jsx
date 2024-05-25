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
    <div className='flex justify-center flex-col items-center rounded-md mt-40 box-content h-50 w-50 p-4'>
      <div className='bg-gray-200 p-7 rounded-lg'>
      <OutputScreen answer={input}/>
      <div className='flex flex-1 flex-row gap-6 lg:pl-5 mt-5 p-4 w-400 justify-center'>
        
        <div>
          <Button handleClick={handleClick} label={'AC'} className='bg-blue-100 text-blue-500 hover:bg-blue-200'/>
          <Button handleClick={handleClick} label={'7'} className=''/>
          <Button handleClick={handleClick} label={'4'} className=''/>
          <Button handleClick={handleClick} label={'1'} className=''/>
          <Button handleClick={handleClick} label={'0'} className=''/>
        </div>
        <div>
          <Button handleClick={handleClick} label={'Del'} className='bg-blue-100 text-blue-500 hover:bg-blue-200'/>
          <Button handleClick={handleClick} label={'8'} className=''/>
          <Button handleClick={handleClick} label={'5'} className=''/>
          <Button handleClick={handleClick} label={'2'} className=''/>
          <Button handleClick={handleClick} label={'.'} className=''/>
        </div>
        <div>
          <Button handleClick={handleClick} label={'%'} className='bg-blue-100 text-blue-500'/>
          <Button handleClick={handleClick} label={'9'} className=''/>
          <Button handleClick={handleClick} label={'6'} className=''/>
          <Button handleClick={handleClick} label={'3'} className=''/>
          <Button handleClick={handleClick} label={'='} className='absolute pl-40 bg-blue-400 text-white hover:bg-blue-300 text-center'/>
          
        </div>
        <div>
          <Button handleClick={handleClick} label={'/'} className='bg-blue-100 text-blue-500 hover:bg-blue-200'/>
          <Button handleClick={handleClick} label={'*'} className='bg-blue-100 text-blue-500 hover:bg-blue-200'/>
          <Button handleClick={handleClick} label={'-'} className='bg-blue-100 text-blue-500 hover:bg-blue-200'/>
          <Button handleClick={handleClick} label={'+'} className='bg-blue-100 text-blue-500 hover:bg-blue-200'/>
          
        </div>

      </div>


      </div>
    </div>
  
  )
}

export default Calculator;