
import {Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';



export const ChartBar = () => {

  return (

    <><div className=' md:w-[50%] h-96 space-y-2'>
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
    </div>
  
    </>
   
  );
};
