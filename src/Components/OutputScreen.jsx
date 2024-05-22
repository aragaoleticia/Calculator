import React from 'react';
import OutputScreenRow from './OutputScreenRow';

function OutputScreen({answer}) {
  return (
    <div>
      <OutputScreenRow value={answer} />
      
    </div>
  )
};

export default OutputScreen;
