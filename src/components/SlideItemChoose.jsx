import React from 'react'
import { NavLink } from 'react-router-dom'
const SlideItemChoose = ({title, item}) => {
    console.log('data item choose', item[0])
  return (
    <div>
        <div className='gap-2 grid grid-cols-3 flex-wrap'>
            {item[0]?.map((data, index) => (
                <NavLink className='flex mb-4' key={index} to={`${data?.link.split('.')[0]}`}>
                    <div className='mr-3'>
                        <div className='w-[80px]'><img className='w-[100%] flex flex-auto rounded-md' src={data?.thumbnail} 
                        alt={data?.title}></img></div>
                    </div>
                    <div className='flex flex-col text-[13px]'>
                        <span className='text-gray-100 '>{data?.title?.length > 10 ? `${data?.title?.split(0,10)[0]}...` : data?.title}</span>
                        <span className='text-gray-400 '>
                            {data?.artistsNames?.length > 10 ? `${data?.artistsNames?.split(0,10)[0]}...` : data?.artistsNames}
                        </span>
                    </div>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default SlideItemChoose