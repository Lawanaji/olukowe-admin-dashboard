import React, { useState } from 'react'
import Pagination from '../components/Pagination'
import { MdArrowBackIos ,MdArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuArrowUpDown ,LuUsers } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

function BoxWrapper ({children}){
  return(
    <div className='bg-secondary rounded-md w-full h-[100px] gap-5 md:h-[50px]border border-gray-200 border-none flex justify-center  items-center'>{children}</div>
  )
} 

function Box ({children}){
  return(
    (
      <div className='grid gap-5  sm:flex sm:gap-4 w-full'>
      <BoxWrapper><LuUsers className='text-3xl'/><span><p>Users</p><strong>10,956</strong></span></BoxWrapper>
      <BoxWrapper><LuDollarSign className=' text-green-500 text-3xl'/><span><p>Income</p><strong>$ 30,000</strong></span></BoxWrapper>
      <BoxWrapper><AiOutlineMoneyCollect  className='text-3xl text-red'/><span><p>Expenses</p><strong>$ 5,000</strong></span></BoxWrapper>
      <BoxWrapper><BiLogoGmail className='text-3xl text-primary'/><span><p>Total</p><strong>$ 25,000</strong></span></BoxWrapper>
      </div>
    )
  )
}
const TABLE_ROW = [
  {
    email: 'Momodu@gmail.com',
    username: 'Momodu',
    age: '32',
    gender: 'Male',
    location: 'Nigeria',
    subscription: 'Full Products',
    retention: <span className='inline-block text-green-600'><LuArrowUpDown /> </span>
  },
   {email: 'Momodu@gmail.com',
  username: 'Momodu',
  age: '32',
  gender: 'Male',
  location: 'Nigeria',
  subscription: 'Full Products',
  retention: <span className='inline-block text-green-600'><LuArrowUpDown /> </span>
},
{email: 'Momodu@gmail.com',
username: 'Momodu',
age: '32',
gender: 'Male',
location: 'Nigeria',
subscription: 'Full Products',
retention: <span className='inline-block text-red'><LuArrowUpDown /> </span>
}

]

const cost = [
  {
    name: "marketing",
    amount: 1300.00
  },
  {
    name: "marketing",
    amount: 1300.00
  },
  {
    name: "marketing",
    amount: 1300.00
  }
]


export const Revenue = () => {
  const [calender, setCalender] = useState("")

const handleChangeCalender = event =>{
  setCalender(event.target.value)

}
  return (

    <>
  <div className=' w-full h-screen'>
  <div className='  flex justify-between  items-center gap-4 mb-6'> 
 
 <h1 className=' text-xl font-bold md:text-2xl'>Filter</h1>
 <div className='flex gap-5'>
 <div className='border flex items-center p-3 border-[] rounded-3xl'> <MdArrowBackIos/> <p>21-27 May 2023</p> <MdArrowForwardIos /></div>
 <select className='border flex items-center p-3 rounded-3xl'
        name="filter"
        value={calender}
        onChange={handleChangeCalender}
       
      >
        <option value="name">Days</option>
        <option value="date">Weeks</option>
        <option value="category">Month</option>
        <option value="category">Year</option>
      </select>
 </div>
 </div >
 <Box/>
      <div className='w-full md:flex justify-between py-5'>
        <div className='w-full md:w-[30%] md:h-[20vh] bg-primary'></div>
        <div className='w-full md:w-[30%] md:h-[50vh] rounded-md '>

          <div className='flex justify-between p-5'>
          <h1 className=' text-xl font-medium md:text-2xl'>Cost</h1>
          <div className='bg-[#F5F4F4] flex items-center p-3 text-primary'><p className='text-black'>month</p> <MdKeyboardArrowDown /></div>

          </div>

          <div className='flex justify-between px-10'>
            <h1 className=''>May, 2023</h1>
            <h1>Amount</h1> 
          </div>
          <span className='flex justify-between p-10 border-b-2  border-[#D9D9D9]'>
            {cost.map(({name,amount})=>{
              return(
                <p>{name}</p>
           
              )
              return(
                <h1>{amount}</h1>
              )
            })}
                 
          
          </span>

        </div>
      
    </div>


  <div className='w-full overflow-x-scroll'>
  <table className='w-full table-auto text-center whitespace-nowrap'> 
   <tbody>
  {TABLE_ROW.map(({email, username, age, gender, location, subscription, retention} )=>{
    
    return(
      <tr className='bg-secondary  border-b-[2rem] border-white'>
        <td className='p-4 py-4'>{email}</td>
        <td className='p-4' >{username}</td>
        <td className='p-4' >{age}</td>
        <td className='p-4' >{gender}</td>
        <td className='p-4' >{location}</td>
        <td className='p-4' >{subscription}</td>
        <td className='p-4' >{retention}</td>

      </tr>
    )
  })}
  
</tbody>
   </table>
  </div>
    <Pagination />
  </div>
    </>
  
  )
}
