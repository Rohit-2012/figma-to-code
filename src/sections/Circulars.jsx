import React from 'react'
import CircularCard from '../components/CircularCard'
import { circulars } from '../utils/circularData'
import SocialMediaCard from '../components/SocialMediaCard'

const Circulars = () => {
  return (
    <div className='mt-8 px-14 flex flex-col gap-8'>
      <div className="flex items-center justify-center gap-3 text-sm">
        <span>SAIL VIEW ALL</span>
        <div className="w-[25rem] border-b border-black h-0"></div>
        <span>CIRCULAR/NOTIFICATIONS</span>
        <div className="w-[25rem] border-b border-black h-0"></div>
        <span>SOCIAL MEDIA</span>
          </div>
          
          <div className='flex gap-8 mt-4 p-4'>
              {
                  circulars.map(circular => (
                      <CircularCard key={circular.heading} circular={circular}/>
                  ))
              }
              <SocialMediaCard />
          </div>
    </div>
  )
}

export default Circulars
