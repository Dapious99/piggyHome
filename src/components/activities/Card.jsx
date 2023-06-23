import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';


const Card = ({image,head,par,write}) => {
  return (
    <div className='bg-[#f9f9f9] py-8 px-4 rounded-3xl border w-[23rem] h-[21.5rem]'>
        <div>
            <img src={image} className='w-[3rem] h-[3rem]'/>
            <div className='h-[10rem] py-[1rem]'>
                <p className='py-6 font-bold text-[24px]'>{head}</p>
                <p className='font-normal text-[18px]'>{par}</p>
            </div>
            <a className= 'decoration-none flex gap-2 items-center pt-12'><AiOutlineArrowRight/><span>{write}</span></a>
        </div>
    </div>
  )
}

export default Card