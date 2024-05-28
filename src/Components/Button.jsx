import React, { useState } from 'react';


function Button({label, handleClick, className}) {

  const [buttonCLicked, setButtonClicked] = useState(false);

  const buttonStyle = 'w-20 h-20 mt-2 text-3xl rounded-full px-7 py-5 flex justify-center items-center cursor-pointer';
  const buttonCLickedStyle = 'bg-rose-200 text-white w-20 h-20 mt-2 text-3xl rounded-full px-7 py-5 font-semibold flex justify-center items-center';

  const handleButtonCliked = (event) => {
    setButtonClicked(true);
    handleClick(event)

    setTimeout(() => {
      setButtonClicked(false);
    }, 200)
  }

  return (
    <div>
      <div>
        <input
          className={`${className} ${buttonCLicked ? buttonCLickedStyle : buttonStyle}`} 
          type='button' 
          value={label}
          onClick={handleButtonCliked}
        />
      </div>
    </div>

  )
};

export default Button;
