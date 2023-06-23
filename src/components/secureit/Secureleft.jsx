import React from 'react'
import lock from '../../assets/security.png'

const Secureleft = () => {
  return (
    <div className='w-[35%] sm:w-[100%] relative'>
        <div className='w-[6.5rem] h-[6.5rem] absolute end-0 pt-5 ml-[6rem] sm:sticky sm:w-[7rem] sm:h-[7rem]'>
            <img src={lock}/>
        </div>
    </div>
  )
}

export default Secureleft