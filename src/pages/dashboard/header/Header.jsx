// import React from 'react'
import React, { useState } from 'react';
import profile from '../../../assets/profile.svg'
export const Header = () => {
  const [calender, setCalender] = useState("")

  const handleChangeCalender = event =>{
    setCalender(event.target.value)
  
  }
  return (
    <div className='flex items-center justify-between' >
       <h1 className='text-primary text-3xl font-bold'> Dashboard</h1>
    
    <div className='flex w-[25%] justify-around items-center'>
        <input className='border border-gray-600 rounded-3xl outline-none p-2' type="search" name="search" id="search" />
<select className='flex items-center  focus:border-none'
        name="filter"
        value={calender}
        onChange={handleChangeCalender}
       
      >
       
        <option value="name">Days</option>
        <option value="date">Weeks</option>
        <option value="category">Month</option>
        <option value="category">Year</option>
      </select>
<img className=' cursor-pointer' src={profile} alt="" />
    </div>
    </div>
  )
}
