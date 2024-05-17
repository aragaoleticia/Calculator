import React, { useState } from 'react';
import Button from './Button'
import OutputScreen from './OutputScreen';

function Calculator() {

  const [input, setInput] = useState({
    question: '',
    answer: ''
  });

  const handleClick = (event) => {
    const value = event.target.value;
    
    switch(value) {
      case '=': {
        if(input.question !== '') {
          let result = '';
          try {
            result = eval(input.question);

          }catch(err){
            setInput({answer: 'Math error', question: ''});
          }
          if(result === undefined) {
            setInput({answer: 'Math error'})
          } 
          else {
            setInput({answer: result, question: ''})
          } 
        }
        break
      }

      case 'Clear': {
        setInput({answer: '', question: ''})
        break
      }

      default: {
        setInput({question: (input.question += value)})
        break
      }
    }

  }


  return (
    <div className='flex justify-center flex-col items-center mt-10 '>
    <OutputScreen question={input.question} answer={input.answer}/>
    <div className='flex flex-1 flex-row gap-6 lg:pl-5 mt-5 w-full justify-center '>
      <div>
        <Button handleClick={handleClick} label={'Clear'}/>
        <Button handleClick={handleClick} label={'.'}/>
        <Button handleClick={handleClick} label={'/'}/>
      </div>
      <div>
        <Button handleClick={handleClick} label={'7'}/>
        <Button handleClick={handleClick} label={'8'}/>
        <Button handleClick={handleClick} label={'9'}/>
        <Button handleClick={handleClick} label={'*'}/>
      </div>
      <div>
        <Button handleClick={handleClick} label={'4'}/>
        <Button handleClick={handleClick} label={'5'}/>
        <Button handleClick={handleClick} label={'6'}/>
        <Button handleClick={handleClick} label={'-'}/>
      </div>
      <div>
        <Button handleClick={handleClick} label={'1'}/>
        <Button handleClick={handleClick} label={'2'}/>
        <Button handleClick={handleClick} label={'3'}/>
        <Button handleClick={handleClick} label={'+'}/>
      </div>
      <div>
        <Button  handleClick={handleClick} label={'0'}/>
        <Button  handleClick={handleClick} label={'='}/>
      </div>
    </div>
    </div>
  )
}

export default Calculator;