import { footerLinks } from '../utils/footerLinks'
import { governmentSites, appentus, footerImage, whiteTrademark } from '../assets/images'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
      <footer>
          <div className="flex justify-center p-4 border-y border-slate-600 my-[6rem]">
              <img src={governmentSites} />
          </div>
          <div className='bg-[#003375] text-white p-[3rem] flex gap-6 relative'>
              {
                  footerLinks.map((footerLink, index) => (
                      <div key={index}>
                          <h1 className='text-lg font-bold mb-6'>{footerLink.heading}</h1>
                          <ul className='flex flex-col gap-2'>
                              {footerLink.links.map((link, index) => (
                                  <li key={index} className='text-[12px]'>{ link }</li>
                              ))}
                          </ul>
                      </div>
                  ))
              }
          <img src={whiteTrademark} className='absolute bottom-12 right-12' />
          </div>

          <div className='flex justify-between items-center text-[12px] px-[4rem] border-b border-slate-600'>
              <span className='w-[42%]'>
              This is the official Website of Steel Authority of India Limited (SAIL), a Public Sector Undertaking of the Government of India under the Ministry of Steel
              </span>
              <div className='flex items-center gap-4'>
                  <span>Last Updated on :01 January 2024 | Visitor No:<span className='text-lg font-semibold'>123456</span></span>
                  <img src={footerImage} alt="Footer Image" />
              </div>
          </div>

          <div className='flex items-center justify-between text-sm px-[4rem] py-4'>
              <div className='text-sm flex items-center justify-evenly gap-4'>
                  <span>Copyright © 2024 SAIL, All Rights Reserved</span>
                  <Link to='/' className='font-semibold underline'>Hyperlinking Policy</Link>
                  <Link to='/' className='font-semibold underline'>Terms & Conditions</Link>
              </div>
              <div className='flex flex-col items-end'>
                  <div className='flex items-center gap-2'>
                      <span>Designed & Developed by:</span>
                      <img src={appentus} alt="Appentus Logo" />
                  </div>
                  <div>
                      <span>Appentus Technologies Pvt Ltd, Jaipur, Rajasthan (INDIA)</span>
                  </div>
              </div>
          </div>
    </footer>
  )
}

export default Footer
