import React from 'react'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import profile from '../../../assets/profile.svg'
const ONGOING_TASK =()=>{
    return(
        <span className='flex gap-6 items-center'>
            <img src={profile} alt="" />
            <p> <stroke className='text-primary'>Team leader</stroke> assigned the “Designs changes for the dashboard changes”</p>
            <span className='flex gap-2 text-[#001633B2]'>
                <p>May 2, 2023</p>
                <p>10:30am</p>
            </span>
        </span>
    )
}

export const OngoingTask = () => {
  return (
    <div >
         <div className='py-10 space-y-5'>
      <span className='flex justify-between text-[#001633B2]'>
        <p>Time on Task</p>
        <button className='underline'>View All</button>

      </span>

      <ONGOING_TASK />
      <ONGOING_TASK />
      <ONGOING_TASK />
      </div>
    </div>
  )
}
