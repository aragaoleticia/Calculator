import React, { useState } from 'react';




function Button({label}) {

  const [button, setButton] = useState({
    question: '',
    answer: ''
  });

  const handleClick = (event) => {
    const value = event.target.value;
    
    switch(value) {
      case '=': {
        if(button.question !== '') {
          let result = '';
          try {
            result = eval(button.question);

          }catch(err){
            setButton({answer: 'Math error', question: ''});
          }
          if(result === undefined) setButton({answer: 'Math error'})
          else setButton({answer: result, question: ''})
          break
        }
      }

      case 'Clear': {
        setButton({answer: '', question: ''})
        break
      }

      default: {
        setButton({question: (button.question += value)})
        break
      }
    }

  }

  return (
    <div>
      <input
        className='bg-red-500 text-white rounded-full px-6 py-2 font-semibold' 
        type='button' 
        value={label}
        onClick={() => handleClick}
      />
    </div>
  )
};

export default Button;
