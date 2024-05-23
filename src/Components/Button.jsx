import React from 'react';


function Button({label, handleClick}) {



  return (
    <div>
      <div>
        <input
          className='bg-orange-500 hover:bg-orange-300 text-gray-200 text-3xl rounded-full px-8 py-6 font-semibold flex items-center' 
          type='button' 
          value={label}
          onClick={handleClick}
        />
      </div>
    </div>

  )
};

export default Button;
