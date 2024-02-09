import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import profile from '../../../../../src/assets/profile.svg'
import { FaStar } from 'react-icons/fa6';
ChartJS.register(ArcElement,Tooltip, Legend);


export const ProgressiveBar = () => {
  const data = {
    labels:["Ebook", "Article", "Blog","Tweet generation", "product description"],
    datasets: [
      {
        label: "Features used by Users",
        backgroundColor: ["#F55A8E", "#A2E62E","#DEDDFF","#03A9F4","#556080"],
        data: [25,55,30,15,24]
      }
    ]
  }

  const options = {

  }
  return (
    <>
 <div className='w-full md:w-[30%] flex flex-col gap-5 '>
 <div className=''>
      <h1 className='text-2xl font-semibold'>Top 5 Features used by Users</h1>

      <div className=' bg-gray h-[300px]'>
        <Doughnut data = {data}   options= {options} />
        
      </div>
    </div>


    {/* ERROR RATES */}
    <div className='flex justify-between '><h1>Error Rates</h1><button className='underline'>view All</button></div>
   <div className='bg-[#F8F8F8] w-full rounded-md p-3'>
    <div className='flex items-center justify-between border-b-2 border-[#DDE8F7]'>
      <div className='flex '>
      <img src={profile} alt="" />
<span className='p-2'><p className=''>Momodu</p><p className=' text-sm font-medium'>Translating</p></span>
      </div>
<p className='font-medium'>50% Error rate</p>

    </div>
    <div className='flex items-center justify-between border-b-2 border-[#DDE8F7]'>
      <div className='flex '>
      <img src={profile} alt="" />
<span className='p-2'><p>Momodu</p><p>Translating</p></span>
      </div>
<p className='font-medium'>50% Error rates</p>

    </div>

    <div className='flex items-center justify-between border-b-2 border-[#DDE8F7]'>
      <div className='flex '>
      <img src={profile} alt="" />
<span className='p-2'><p>Momodu</p><p>Translating</p></span>
      </div>
<p className='font-medium'>50% Error rates</p>

    </div>

    <div className='flex items-center justify-between'>
      <div className='flex '>
      <img src={profile} alt="" />
<span className='p-2'><p>Momodu</p><p>Translating</p></span>
      </div>
<p>50% Error rates</p>

    </div>

   </div>

   <div className='flex justify-between '><h1>Recent Reviews</h1><button className='underline'>view All</button></div>

   <div className='bg-secondary rounded-md p-2 space-y-2 w-full'>

    <div className='flex justify-center items-center  gap-2' >
    <img src={profile} className='w-[20px]' alt="" />
    <div className=''>
    <p>Momodu</p>
    <p className='font-thin text-xs text-wrap'>Lorem, ipsum dolor. Lorem ipsum  earum est repellendus porro laborum culpa! Fuga obcaecati facilis maiores.</p>
    </div>

    <FaStar color='green'/>
    <FaStar color='green'/>
    <FaStar color='green'/>
    <FaStar color='gray'/>
    <FaStar color='gray'/>
   
    </div>

    <div className='flex justify-center items-center gap-2' >
    <img src={profile} className='w-[20px]' alt="" />
    <div className=''>
    <p>Momodu</p>
    <p className='font-thin text-xs text-balance'>Lorem, ipsum dolor. Lorem ipsum  earum est repellendus porro laborum culpa! Fuga obcaecati facilis maiores.</p>
    </div>

    <FaStar color='green'/>
    <FaStar color='green'/>
    <FaStar color='green'/>
    <FaStar color='gray'/>
    <FaStar color='gray'/>
   
    </div>

    <div className='flex justify-center items-center gap-2' >
    <img src={profile} className='w-[20px]' alt="" />
    <div className=''>
    <p>Momodu</p>
    <p className='font-thin text-xs text-balance'>Lorem, ipsum dolor. Lorem ipsum  earum est repellendus porro laborum culpa! Fuga obcaecati facilis maiores.</p>
    </div>

    <FaStar color='green'/>
    <FaStar color='green'/>
    <FaStar color='green'/>
    <FaStar color='gray'/>
    <FaStar color='gray'/>
   
    </div>
   

   </div>



 </div>
    </>
    
  )
}
