import React from 'react'
import Button from './Button'
import OutputScreen from './OutputScreen';

function Calculator() {
  return (
    <div className='flex justify-center flex-col items-center mt-10 '>
    <OutputScreen/>
    <div className='flex flex-1 flex-row gap-6 lg:pl-5 mt-5 w-full justify-center '>
      <div>
        <Button label={'Clear'}/>
        <Button label={'Delete'}/>
        <Button label={'.'}/>
        <Button label={'/'}/>
      </div>
      <div>
        <Button label={'7'}/>
        <Button label={'8'}/>
        <Button label={'9'}/>
        <Button label={'*'}/>
      </div>
      <div>
        <Button label={'4'}/>
        <Button label={'5'}/>
        <Button label={'6'}/>
        <Button label={'-'}/>
      </div>
      <div>
        <Button label={'1'}/>
        <Button label={'2'}/>
        <Button label={'3'}/>
        <Button label={'+'}/>
      </div>
      <div>
        <Button label={'0'}/>
        <Button label={'='}/>
      </div>
    </div>
    </div>
  )
}

export default Calculator;