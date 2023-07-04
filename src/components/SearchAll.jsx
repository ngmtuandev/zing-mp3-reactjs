import React from 'react'
import { useSelector } from 'react-redux'
const SearchAll = () => {

  const {dataSearch} = useSelector(state => state.app)
  console.log('data find search',dataSearch?.['data']?.['data'])
  return (
    <div className="p-[20px] ">
      <div className="text-gray-100 text-[20px]">BÀI HÁT</div>
      <div className="grid-cols-2 mt-[20px]  grid">
        {dataSearch?.['data']?.['data']?.songs?.map((item, index) => (
        <div className="mb-6 flex ">
          <div><img className="rounded-md mr-3" src={item?.thumbnail} alt= {item?.title}></img></div>
          <div className="flex flex-col justify-center">
            <span className="text-gray-100">{item?.title}</span>
            <span className="text-gray-100">{item?.artistsNames}</span>
          </div>
        </div>
        
      ))}</div>
    </div>
  )
}

export default SearchAll