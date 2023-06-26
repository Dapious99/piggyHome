import React from 'react'
import Heroleft from './Heroleft'
import Heroright from './Heroright'

const Hero = () => {
  return (
    <section className='py-[6rem] px-[8rem] sm:p-0 md:p-0'>
        <div className='flex gap-[6rem] w-[100%] py-[3rem] md:gap-[3.2rem] md:flex md:flex-col sm:gap-[3rem] sm:flex sm:flex-col'>
            <Heroleft />
            <Heroright />
        </div>
    </section>
  )
}

export default Hero