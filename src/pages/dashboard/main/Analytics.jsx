import React from 'react'
import { ChartBar } from './sessionLenght/ChartBar'
import { ProgressiveBar } from './sessionLenght/ProgressiveBar'

export const Analytics = () => {
  return (
    <div className=' grid md:flex w-full justify-around '>
       <ChartBar/>

       <ProgressiveBar/>
    </div>
  )
}
