import React from 'react'
import Navbar from '../components/Navbar'
import Herosec from '../components/Herosec'
import { FeaturesSec } from '../components/Features'
import Services from '../components/Services'
const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Herosec/>  
        <FeaturesSec/>
        <Services/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home