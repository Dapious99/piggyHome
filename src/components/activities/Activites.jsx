import React from 'react'
import ActivitiesLeft from './ActivitiesLeft'
import ActivitiesRight from './ActivitiesRight'

const Activites = () => {
  return (
    <section className='py-4 px-[8rem] gap-[4rem] sm:px-0'>
        <div className='flex sm:flex sm:flex-col'>
            <ActivitiesLeft />
            <ActivitiesRight />
        </div>
    </section>
  )
}

export default Activites