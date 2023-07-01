import React from 'react'
import { Outlet } from 'react-router-dom'
import {SilderBarLeft, SilderBarRight} from '../../components/index'
const Public = () => {
  return (
    <div className='w-full flex'>
      <div className='w-[200px] border border-red-500 flex-none'>
        <SilderBarLeft></SilderBarLeft>
      </div>
      <div className='flex-auto border border-red-500 bg-[#22133a]'>
        <Outlet></Outlet>
      </div>
      <div className='w-[270px] border border-red-500 flex-none'>
        <SilderBarRight></SilderBarRight>
      </div>
    </div>
  )
}

export default Public