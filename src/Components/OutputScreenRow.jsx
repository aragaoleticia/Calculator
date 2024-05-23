import React from 'react';

function OutputScreenRow({value}) {
  return (
    <div>
      <input 
        className='flex-1 text-3xl  border-2 outline-none px-8 py-6 rounded-2xl text-end' 
        type='text' 
        placeholder='0'
        readOnly
        value={value}
      />
    </div>
  )
}

export default OutputScreenRow
