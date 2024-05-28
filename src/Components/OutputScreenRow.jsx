import React from 'react';

function OutputScreenRow({answer}) {
  return (
    <div>
      <input 
        className='text-end text-rose-500 text-3xl font-semibold py-10 rounded-t-lg bg-stone-100' 
        type='text' 
        placeholder='0'
        readOnly
        value={answer}
      />
      
    </div>
  )
}

export default OutputScreenRow
