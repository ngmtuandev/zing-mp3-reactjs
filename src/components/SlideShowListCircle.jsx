import React from 'react'
import { useNavigate } from 'react-router-dom'

const SlideShowList = ({title, items}) => {
  console.log('testtt : ', title, items)

  const navigate = useNavigate()

  const handleListItem = (link) => {
    const navLink = link?.split('.')[0]
    // console.log(navLink)
    navigate(navLink)
  } 

  return (
    <div className='p-[20px]'>
      <div className='text-gray-100 text-[18px] font-bold uppercase'>{title}</div>
      <div className='flex gap-5 mt-6 mb-6'>
        {
          items && items?.map((item, index) => (
            <div className='cursor-pointer flex flex-col justify-center items-center' key={index} onClick={() => handleListItem(item.link)}>
              <div className='w-[100px] h-[100px]'><img className='rounded-[50%] ring-offset-slate-500 duration-100 hover:outline-purple-800 
              hover:outline-dashed hover:animate-bounce ease-in duration-150' src={item?.thumbnail} alt={item?.title}></img>
              </div>
              <div className='flex flex-col text-gray-100 mt-4'>
                <span className='text-gray-200 text-[15px]'>{item?.title.length > 15 ? `${item?.title?.slice(0, 15)}...` 
                : item?.title }</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SlideShowList