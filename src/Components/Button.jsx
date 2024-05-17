import React from 'react';


function Button({label, handleClick}) {



  return (
    <div>
      <div>
        <input
          className='bg-red-500 text-white rounded-full px-6 py-2 font-semibold' 
          type='button' 
          value={label}
          onClick={handleClick}
        />
      </div>
    </div>

  )
};

export default Button;
