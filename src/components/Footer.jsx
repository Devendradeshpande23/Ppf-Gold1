import React from 'react'
import logofooter from '../assets/images/logo/logo-footer.webp'
export const Footer = () => {
  return (
    <div className='bg-black' >
      <div className='bg-neutral-700 text-white rounded-t-xl flex justify-between items-center p-5' >
        <img className='w-[clamp(200px,40vw,900px)]' src={logofooter} alt="footer-logo" />
        <div className=''>
          <h3 className='text-[clamp(1.2rem,2.5vw,2rem)]' >Contact Us</h3>
          <ul className='text-[clamp(0.9rem,2.5vw,1.2rem)]'>
            <li>📞 +91-912224320</li>
            <li>✉
              coo@smtradeco.com</li>
          </ul>
        </div>
        <hr className='h-5 font-black' />
      </div>

    </div>

  )
}
