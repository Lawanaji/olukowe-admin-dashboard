
import {Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { CircularProgressbar } from 'react-circular-progressbar';


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

  const percentage = [60]
  
  return (

    <>

      <div className=' md:w-[50%] h-96 space-y-2 '>
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
    <div className='flex'>
      
   <CircularProgressbar value={`${percentage}%`}  className= 'w-[100px] text-blacks rounded-full fill-none stroke-slate-300' />

    </div>  
    </div>
   
    </>
   
  );
};
