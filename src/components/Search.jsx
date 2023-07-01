import React from 'react'
import icons from '../ultis/icons'
const Search = () => {

    const {BiSearchAlt} = icons

  return (
    <div className='flex'>
        <div className='p-2 pl-3 text-gray-200 w-[60px] bg-[#54406e] rounded-l-3xl'><BiSearchAlt size='23px'></BiSearchAlt></div>
        <input className='p-2 w-[400px] outline-none text-gray-200 bg-[#54406e] rounded-r-3xl'  type="text" placeholder='Nhập bài hát, tên ca sỹ bạn muốn tìm kiếm ?'/>
    </div>
  )
}

export default Search