import type { CompanyData } from '@/pages/MarketsPage/data/interfaces.types'
import React from 'react'

function EmployeeInfo({data}:{data:CompanyData}):React.JSX.Element {
  return (
    <div className='flex flex-col w-1/2 gap-2 mt-4'>
        <p className='font-semibold text-xs text-[#DAE2FD] leading-3 uppercase'>key data points</p>
        <div className="flex justify-between mt-2">
          <span className='text-paragraph text-sm leading-5.25 '>CEO</span>
          <span className='font-semibold text-sm leading-5.25 text-[#DAE2FD]'>{data.ceo}</span>
        </div>

        <div className="flex justify-between">
          <span className='text-paragraph text-sm leading-5.25 '>Founded</span>
          <span className='font-semibold text-sm leading-5.25 text-[#DAE2FD]'>{data.founded}</span>
        </div>

        <div className="flex justify-between">
          <span className='text-paragraph text-sm leading-5.25 '>Employees</span>
          <span className='font-semibold text-sm leading-5.25 text-[#DAE2FD]'>{data.employees}</span>
        </div>
    </div>
  )
}

export default EmployeeInfo