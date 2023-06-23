import React from 'react'
import Secureleft from './Secureleft'
import SecureRight from './SecureRight'

const Secure = () => {
  return (
    <section className='pt-2 pb-16 px-[8rem] sm:px-4'>
        <div className='flex gap-[2rem] w-[100%] sm:gap-[3rem] sm:flex sm:flex-col'>
            <Secureleft />
            <SecureRight />
        </div>
    </section>
  )
}

export default Secure