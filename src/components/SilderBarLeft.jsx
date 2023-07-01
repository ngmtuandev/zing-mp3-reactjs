import React from 'react'
import {NavLink, } from 'react-router-dom'
import {optionSidebar} from '../ultis/optionMenu'
const SilderBarLeft = () => {

  return (
    <div className='flex flex-col bg-[#413256]'>
      <div className='pt-4 pb-4 pl-5 w-full flex justify-start items-center'>
        <span className='text-blue-400 text-2xl'>NHẠC Ở ĐÂY</span>
      </div>
      <div className='fex flex-col'>
        {
          optionSidebar.map((item, index) => (
            <NavLink key={index} className={({isActive}) => isActive ? 'items-center py-1 px-5 text-[16px] flex gap-2 font-semibold text-[#ffffff]' : 
            'items-center py-1 px-5 text-[16px] flex gap-2 font-semibold text-[#cfcfd3]'
          } 
            to={item.path}>
              <div>{item.icon}</div>
              <span>{item.contain}</span>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default SilderBarLeft