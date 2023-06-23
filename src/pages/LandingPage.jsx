import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Secure from '../components/secureit/Secure'
import Activites from '../components/activities/Activites'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Secure />
        <Activites />
    </div>
  )
}

export default LandingPage