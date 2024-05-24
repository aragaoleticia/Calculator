import React from 'react';


function Button({label, handleClick, className}) {



  return (
    <div>
      <div>
        <input
          className={`${className} w-20 h-20 mt-2 text-gray-200 text-3xl rounded-full px-7 py-5 font-semibold flex justify-center items-center`} 
          type='button' 
          value={label}
          onClick={handleClick}
        />
      </div>
    </div>

  )
};

export default Button;
