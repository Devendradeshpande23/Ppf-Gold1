// import React from 'react'
import Navbar from '../components/Navbar'
// import Herosec from '../components/Herosec'
// import { FeaturesSec } from '../components/Features'
// import Services from '../components/Services'
import { Footer } from '../components/Footer'
// import { Outlet } from 'react-router'


// const Layout = () => {
//   return (
//     <div>
//         <Navbar/>
        
//         <Outlet />
//         <Footer/>
//     </div>
//   )
// }

// export default Layout


//import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// import Navbar from './Navbar'
// import Footer from './Footer'

const Layout = () => {
  const location = useLocation()

  // Match home page exactly — adjust for subfolder if deployed under /ppf-gold/
  const isHome = location.pathname === '/' || location.pathname === '/ppf-gold/'

  return (
    <>
      <Navbar />
      <main className={isHome ? '' : 'pt-[clamp(5rem,8vw,6rem)]'}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
