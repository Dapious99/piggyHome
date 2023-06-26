import React from 'react'
import Button from '../button/Button'

const ActivitiesLeft = () => {
  return (
    <div className= 'w-[30%] pt-8 sm:w-[100%] sm:text-center md:w-[100%] md:text-center sm:pb-10 sm:px-6 md:pb-9 md:px-6'>
        <div>
            <p className='font-bold text-[2.5rem] sm:text-[2rem] py-4'>4 ways to build your savings</p>
            <p className='font-normal text-[1rem] sm:text-[1.2rem] pb-10'>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
            <Button>Start Saving</Button>
        </div>
    </div>
  )
}

export default ActivitiesLeft