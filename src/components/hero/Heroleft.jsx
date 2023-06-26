import React from 'react'
import Button from '../button/Button'
import { AiFillApple } from 'react-icons/ai';
import playstore from '../../assets/playstore.svg'

const Heroleft = () => {
  return (
    <div className='w-[50%] md:w-[100%] md:px-3 sm:w-[100%] sm:px-2'>
        <div className='py-[2.5rem] md:text-center sm:text-center'>
            <p className='font-bold text-[4.3rem] md:text-[3.4rem] sm:text-[3rem]'>The Better Way to Save & Invest.</p>
            <p className='font-normal text-[1.3rem] sm:text-[20px] md:text-[25px] pt-2 pb-5'>PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
            <a href='https://dashboard.piggyvest.com/register'><Button>Create free account</Button></a>
            <div className='py-8 flex gap-4 md:justify-center'>
                <a href='https://apps.apple.com/ng/app/piggyvest/id1263117994' className='flex py-3 border-black px-3 rounded-xl border gap-1 items-center'>
                  <AiFillApple size={25}/>
                  <span>Get on iPhone</span>
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.piggybankng.piggy' className='flex py-3 border-black px-3 rounded-xl border gap-1 items-center'>
                  <img src={playstore}/>
                  <span>Get on Android</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Heroleft