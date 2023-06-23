import React from 'react'
import Lady from '../../assets/headerImg.png'
import rent from '../../assets/cardOne.png'
import invest from '../../assets/cardTwo.png'


const Heroright = () => {
  return (
    <div className=' w-[50%] sm:w-[100%] px-[4rem] sm:px-auto'>
        <div className='w-[22rem] h-[35rem] relative py-8 rounded-xl border-4 border-black'>
            <div>
                <img src={Lady} className='absolute right-10 bottom-5 h-[32rem]'/>
                <img src={rent} className='absolute right-[15.5rem] bottom-[16.5rem] h-[8.5rem]'/>
                <img src={invest} className='absolute left-[11rem] bottom-6 h-[8rem]'/>
            </div>
        </div>
    </div>
  )
}

export default Heroright