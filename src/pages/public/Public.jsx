import React from 'react'
import { Outlet } from 'react-router-dom'
import {SilderBarLeft, SilderBarRight, PlayMusic, Header} from '../../components/index'
import { useSelector } from 'react-redux'
const Public = () => {
  const {stateRight} = useSelector(state => state.app)
  return (
    <div className=' w-full h-screen flex flex-col'>
      <div className='w-full h-full flex flex-auto'>
        <div className='w-[200px] flex-none'>
          <SilderBarLeft></SilderBarLeft>
        </div>
        <div className='flex-auto bg-[#2b1d3d]'>
          <div className='h-[70px] flex items-center px-[40px] py-2'>
            <Header></Header>
          </div>
          <Outlet></Outlet>
        </div>
        {stateRight && <div className='w-[250px] hidden tablet:block flex-none'>
          <SilderBarRight></SilderBarRight>
        </div>}
      </div>
      <div  className=' fixed w-[100%] flex-none bottom-0'>
        <PlayMusic></PlayMusic>
      </div>
    </div>
  )
}

export default Public