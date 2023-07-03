import React from 'react'
import { Outlet } from 'react-router-dom'
import RingLoader from "react-spinners/RingLoader";
import {SilderBarLeft, SilderBarRight, PlayMusic, Header} from '../../components/index'
import { useSelector } from 'react-redux'
const Public = () => {
  const {stateRight, isLoadHome} = useSelector(state => state.app)
  console.log('isLoadHome : ', isLoadHome)
  return (
    <div className=' w-full relative h-screen flex flex-col'>
      {!isLoadHome && <div className='w-[100%] absolute flex justify-center items-center mt-[200px] ml-[-20px]'><RingLoader color="#695587" size={118}></RingLoader></div>}
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