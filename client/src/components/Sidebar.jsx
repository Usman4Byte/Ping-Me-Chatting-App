import React from 'react'
import assets from '../assets/assets'

const Sidebar = () => {
  return (
    <div>
        <div className='pb-5'>
          <div className='flex justify-center items-center'>
            <img src={assets.logo} alt="logo" className='max-w-40' />
          </div>
        </div>
    </div>
  )
}

export default Sidebar