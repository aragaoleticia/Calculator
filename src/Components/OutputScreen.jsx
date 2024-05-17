import React from 'react';
import OutputScreenRow from './OutputScreenRow';

function OutputScreen({question, anwser}) {
  return (
    <div>
      <OutputScreenRow value={question}/>
      <OutputScreenRow value={anwser}/>
    </div>
  )
};

export default OutputScreen;
