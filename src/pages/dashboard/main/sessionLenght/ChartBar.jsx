
import {Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { FaSortAmountDownAlt } from "react-icons/fa";

import 'react-circular-progressbar/dist/styles.css';
import { TimeTask } from './TImeTask';


export const ChartBar = () => {
  const data = {
    labels:["Ebook"],
    datasets: [
      {
        label: "Features used by Users",
        backgroundColor: ["#F55A8E"],
        data: [25]
        
      }
    ]
  }

  const options = {

  }


  
  return (

    <>

      <div className= 'w-full md:w-[50%] h-screen  sm:h-96 space-y-2 '>
   <h1 className='text-2xl font-semibold'>Session length</h1>
    <div className='rounded-md p-10 bg-gray'>
      <Bar data={{
         labels: ["Blog", "Content Rephraser", "Google Ad", "Instagram", "Landing page", "Linkedin"],
         datasets: [
          {
            label: "Revenue",
            data:[200,300,400, 500, 200, 100],
          }
         ]

      }
         
         
        
      }/>
    </div>
 
      <div className='py-10'>
      <span className='flex justify-between'>
        <p>Time on Task</p>

        <span className='flex items-center gap-3'>sort

<FaSortAmountDownAlt className='text-primary' />

        </span>

      </span>
      <div className='p-3'>
     <TimeTask />

      </div>
      </div>
   
     
    </div>
    </>
   
  );
};
