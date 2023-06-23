import React from 'react'
import Button from '../button/Button'

const Navbtn = () => {
  return (
    <div className='flex gap-3 '>
        <a href='https://dashboard.piggyvest.com/login' className='decoration-black'><Button className='w-16 border border-black bg-white text-black hover:text-blue-700 hover:border-blue-700'>Sign in</Button></a>
        <a href='https://dashboard.piggyvest.com/register' className='decoration-black'><Button>Create free account</Button></a>
    </div>
  )
}

export default Navbtn