import React from 'react'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import { CiFilter } from "react-icons/ci";
import { Filter } from './Filter';

const TABLE_HEAD = ["Email", "Username", "Age", "Gender", "Location", "subscription", "Retention"]
const TABLE_ROW = [
  {
    email: 'Momodu@gmail.com',
    username: 'Momodu',
    age: '32',
    gender: 'Male',
    location: 'Nigeria',
    subscription: 'Full Products',
    retention: <span className='inline-block'><FaArrowAltCircleDown /> </span>
  },
  {
    email: 'Bankoleguy@gmail.com',
    username: 'Smart25',
    age: '32',
    gender: 'Male',
    location: 'Nigeria',
    subscription: 'Full Products',
    retention: <span className='inline-block'><FaArrowAltCircleDown /> </span>
  },
  {
    email: 'Sisi_lolade@gmail.com',
    username: 'Lolade001',
    age: '32',
    gender: 'Male',
    location: 'Nigeria',
    subscription: 'Full Products',
    retention: <span className='inline-block'><FaArrowAltCircleDown /> </span>
  },
  {
    email: 'feyi29@gmail.com',
    username: 'Feyi',
    age: '18',
    gender: 'Femile',
    location: 'United Kingdom',
    subscription: 'Full Products',
    retention: <span className='inline-block'><FaArrowAltCircleDown /> </span>
  },
  {
    email: 'Varox@gmail.com',
    username: 'Best Writer',
    age: '21',
    gender: 'Female',
    location: 'South africa',
    subscription: 'Half Products',
    retention: <span className='inline-block'><FaArrowAltCircleDown /> </span>
  }
 
]
export const Users = () => {
  return (
    <>
    <div className='flex justify-between  items-center gap-4 mb-6'> 
 
<h1 className=' text-xl font-bold md:text-2xl'>User Details</h1>
{/* <button className='w-[5rem] flex items-center justify-centercursor -pointer bg-primary text-white rounded-lg'> <p>filter</p></button> */}
<Filter />
</div >

<div className='w-full overflow-x-scroll'>
<table className='w-full table-auto text-center whitespace-nowrap'>
<thead>
<tr className='bg-secondary rounded-xl border-b-[1rem] border-white'>
  {TABLE_HEAD.map((head) => (<th className='p-3' key={head} >{head}</th>))}
</tr>
</thead>
<tbody>
  {TABLE_ROW.map(({email, username, age, gender, location, subscription, retention} )=>{
    
    return(
      <tr className='bg-secondary  border-b-[2rem] border-white'>
        <td className='p-4'>{email}</td>
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




    </>
  )
}
