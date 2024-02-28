import React from 'react'
import { xFeed, xLogo } from '../assets/images'

const SocialMediaCard = () => {
    const feedsReps = [1, 2, 3]

  return (
    <div className="border border-black rounded-3xl w-[400px] h-[560px] py-4">
          <div className="border-b border-black px-4 py-2 flex justify-between items-center">
              <div className='flex items-center gap-4'>
                  <img src={xLogo} alt="X.com Logo" className='w-10' />
            <h2 className="text-xl font-bold">Feeds</h2>
              </div>
              <span>@SAILsteel</span>
          </div>
          <div className='p-2 flex flex-col gap-4'>
              {
                  feedsReps.map(rep => (
                      <img src={xFeed} alt="Feed From X.com" key={rep}/>
                  ))
              }
          </div>
    </div>
  )
}

export default SocialMediaCard
