import React from 'react'
import { useNavigate } from 'react-router-dom'
import icons from '../ultis/icons'

const SlideShowList = ({title, items}) => {
  console.log('testtt : ', title, items)

  const navigate = useNavigate()
  const {BsPlayCircleFill} = icons
  const handleListItem = (link) => {
    const navLink = link?.split('.')[0]
    // console.log(navLink)
    navigate(navLink)
  }

  return (
    <div className='p-[20px]'>
      <div className='text-gray-100 text-[18px] font-bold uppercase'>{title}</div>
      <div className='flex gap-3 mt-6 mb-6'>
        {
          items && items?.map((item, index) => (
            <div className='cursor-pointer' key={index} onClick={() => handleListItem(item.link)}>
              <div className='w-[1/5] relative group/item'>
                <img className='rounded-md duration-100 hover:animate-spin	' src={item?.thumbnail} alt={item?.title}></img>
                <div className='group/edit hidden absolute group-hover/item:flex hover:animate-spin w-full 
                rounded-md h-full top-0 left-0 bg-gray-500 opacity-60'>
                  <BsPlayCircleFill className='text-gray-100 flex-auto items-center mt-[50%] justify-center translate-y-[-50%]' 
                  size={35}></BsPlayCircleFill>
                </div>
              </div>
              <div className='flex flex-col text-gray-100 mt-4'>
                <span className='text-gray-200 text-[15px]'>{item?.title}</span>
                <span className='text-gray-400 text-[13px]'>{item?.artistsNames}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SlideShowList