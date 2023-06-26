import React from 'react'
import Card from './Card'
import Flex from '../../assets/flex.png'
import Piggy from '../../assets/piggy.png'
import Safelock from '../../assets/safelock.png'
import Target from '../../assets/target.png'

const ActivitiesRight = () => {
  return (
    <div className='grid grid-cols-2 md:gap-x-[15.5rem] md:gap-y-4 md:grid md:px-0 md:w-[100%] md:grid-cols-2 sm:grid sm:grid-rows-4 sm:grid-flow-col gap-9 sm:px-4 px-10 py-4 w-[70%] sm:w-[100%]'>
        <Card 
        image={Piggy}
        head='Automated Savings'
        par='Build a dedicated savings faster on your terms automatically or manually.'
        write='Piggybank'
        />

        <Card 
        image={Safelock}
        head='Fixed Savings'
        par="Lock money away for a fixed duration with no access to it until maturity. It's like havinga custom fixed deposit."
        write='Safelock'
        />

        <Card 
        image={Target}
        head='Goal-oriented Savings'
        par='Reach all your savings goals faster. Save towards multiple goals on your own or with a group.'
        write='Target Savings'
        />

        <Card 
        image={Flex}
        head='Flexible Savings'
        par='Save, transfer, withdraw, manage and organise your money for free at any time.'
        write='Piggybank'
        />
    </div>
  )
}

export default ActivitiesRight