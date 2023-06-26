import React from 'react'
import { AiFillApple } from 'react-icons/ai';
import playstore from '../../assets/playstore.svg'
import Button from '../button/Button'


const Customers = () => {
  return (
    <section>
        <div className='relative pt-7 sm:px-2'>
            <div className='lg:absolute lg:right-[19.5rem] md:text-center md:absolute md:left-[3.5rem] md:w-[80%] md:px-6 sm:text-center sm:w-[100%] w-[35%]'>
                <p className='font-bold text-[3rem] sm:text-[1.5rem] md:text-[2rem]'>4 Million + customers</p>
                <p className='font-normal text-[1.4rem] sm:font-thin sm:text-[1.3rem] py-4'>Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.</p>
                <a href='https://dashboard.piggyvest.com/register'><Button>Create free account</Button></a>
                <div className='py-8 flex gap-4 md:justify-center sm:justify-center'>
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
    </section>
  )
}

export default Customers