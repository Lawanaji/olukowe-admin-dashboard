import React, { useState } from 'react'
import { CiFilter } from 'react-icons/ci'

export const Filter = () => {
    const [showFilter, setShowFilter] = useState(false)

  return (
    <div className='flex justify-start items-center gap-1 bg-primary text-white rounded-md py-1 px-2 relative' >
        <CiFilter />
        <span>Filter</span> 


    </div>
  )
}
