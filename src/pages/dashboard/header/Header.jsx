import React from 'react'
import arrowdropdown from '../../../assets/arrowdrop.svg'
import profile from '../../../assets/profile.svg'
export const Header = () => {
  return (
    <div className='flex items-center justify-between' >
       <h1 className='text-primary text-3xl font-bold'> Dashboard</h1>
    
    <div className='flex w-[25%] justify-around items-center'>
        <input className='border border-gray-600 rounded-md w-[200px] h-[20px] outline-none px-2' type="search" name="search" id="search" />
<img className='cursor-pointer' src={arrowdropdown} alt="" />
<img className=' cursor-pointer' src={profile} alt="" />
    </div>
    </div>
  )
}
