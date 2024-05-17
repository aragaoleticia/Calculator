import React from 'react'

function OutputScreenRow({value}) {
  return (
    <div>
      <input 
        className='flex-1 border-gray-100 outline-none border-2 px-10 py-4 rounded-2xl focus:border-gray-300' 
        type='text' 
        placeholder='0'
        readOnly
        value={value}
      />
    </div>
  )
}

export default OutputScreenRow
