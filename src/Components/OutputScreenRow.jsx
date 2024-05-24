import React from 'react';

function OutputScreenRow({value}) {
  return (
    <div>
      <input 
        className='flex-1 text-3xl border-2 outline-none px-5 py-7 rounded-2xl text-end bg-gray-200' 
        type='text' 
        placeholder='0'
        readOnly
        value={value}
      />
    </div>
  )
}

export default OutputScreenRow
