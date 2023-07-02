import React from 'react'
import icons from '../ultis/icons'
import {Search} from './index'
const Header = () => {
  const {AiOutlineArrowLeft,AiOutlineArrowRight} = icons
  return (
    <div className='flex items-center'>
      <div className='flex text-gray-300 mr-4'>
        <AiOutlineArrowLeft className='cursor-pointer hover:text-gray-100' size='23px'></AiOutlineArrowLeft>
        <AiOutlineArrowRight className='cursor-pointer hover:text-gray-100' size='23px'></AiOutlineArrowRight>
      </div>
      <div>
        <Search></Search>
      </div>
      <div className='text-gray-200 flex ml-[80px] hover:text-gray-100 cursor-pointer'>Đăng nhập</div>
    </div>
  )
}

export default Header