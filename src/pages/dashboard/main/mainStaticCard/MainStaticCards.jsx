import React from 'react'
import { LuUsers } from "react-icons/lu";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
function BoxWrapper ({children}){
  return(
    <div className='bg-secondary rounded-md w-full h-[100px] gap-5 md:h-[50px]border border-gray-200 border-none flex justify-center  items-center'>{children}</div>
  )
} 
export const MainStaticCards = () => {
  return (
    <div className='grid gap-5  sm:flex sm:gap-4 w-full'>
    <BoxWrapper><LuUsers className='text-3xl'/><span><p>Users</p><strong>10,956</strong></span></BoxWrapper>
    <BoxWrapper><LuUsers className=' text-green-500 text-3xl'/><span><p>Active Users</p><strong>10,956</strong></span></BoxWrapper>
    <BoxWrapper><FaArrowsRotate className='text-3xl'/><span><p>Referrals</p><strong>106</strong></span></BoxWrapper>
    <BoxWrapper><FaPercent className='text-3xl'/><span><p>Churn rate</p><strong>0.3</strong></span></BoxWrapper>
    </div>
  )
}
