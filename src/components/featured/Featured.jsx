import React from 'react'
import crunch from '../../assets/imageCrunch.png'
import guardian from '../../assets/imageGuardian.png'
import tPoint from '../../assets/imagetechpoint.png' 


const Featured = () => {
  return (
    <section className=''>
        <div className='bg-[#f9f9f9] lg:flex lg:flex-row flex flex-col'>
            <p>As featured in</p>
            <div className='flex sm:flex sm:flex-col'>
                <a href='https://techpoint.africa/2018/05/31/piggybank-secures-1-1-million-funding/'><img src={tPoint}/></a>
                <a href='https://guardian.ng/news/nigeria/piggybank-asserts-expansion-plans-becomes-piggyvest/'><img src={guardian}/></a>
                <a href='https://techcrunch.com/2018/05/31/nigerias-piggybank-ng-raises-1-1m-announces-group-investment-product/'><img src={crunch}/></a>
            </div>
        </div>
    </section>
  )
}

export default Featured