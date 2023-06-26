import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Secure from '../components/secureit/Secure'
import Activites from '../components/activities/Activites'
import Saver from '../components/saver/Saver'
import Customers from '../components/customers/Customers'
import Featured from '../components/featured/Featured'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Secure />
        <Activites />
        <Saver />
        <Customers />
        <Featured />
    </div>
  )
}

export default LandingPage