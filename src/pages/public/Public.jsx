import React from 'react'
import { Outlet } from 'react-router-dom'
import {SilderBarLeft, SilderBarRight, PlayMusic} from '../../components/index'
const Public = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <div className='w-full h-full flex flex-auto'>
        <div className='w-[200px] flex-none'>
          <SilderBarLeft></SilderBarLeft>
        </div>
        <div className='flex-auto min-h-screen bg-[#22133a]'>
          <Outlet></Outlet>
        </div>
        <div className='w-[270px] hidden tablet:block flex-none'>
          <SilderBarRight></SilderBarRight>
        </div>
      </div>
      <div  className='flex-none h-[100px] '>
        <PlayMusic></PlayMusic>
      </div>
    </div>
  )
}

export default Public