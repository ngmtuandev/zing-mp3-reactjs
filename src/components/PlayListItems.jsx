import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux'
import {setPlay, setSongCurrent} from '../store/action/songCurr'

const PlayListItems = ({song}) => {
    console.log('song item : ', song)

    const dispatch = useDispatch()

  return (
    <div className='mt-4 w-[100%] ' >
        {
            song?.map((item, index) => (
                <div 
                onClick={() => {
                    dispatch(setSongCurrent(item?.encodeId))
                    // dispatch(setPlay(true))
                }}
                key={index} className=' pr-2 flex justify-between mb-5 hover:bg-[#787878] h-[100%]'>
                    <div className='flex w-[200px] items-center hover:text-white cursor-pointer'>
                        <img src={item?.thumbnailM} className='w-[35px] mr-3' alt="" />
                        <div>
                            <span className='text-gray-100 text-[14px] flex justify-start items-center'>{item?.title?.length > 30 ? `${item?.title?.slice(0,25)}...` : item?.title}</span>
                            <span className='text-gray-100 flex justify-start items-center'>{item?.artistsName}</span>
                        </div>
                    </div>
                    <div className='text-gray-200 flex-auto text-[14px] ml-[15px] flex items-center'>{item?.album?.title?.length > 30 ? `${item?.album?.title?.slice(0,25)}...` : item?.album?.title}</div>
                    <div className='text-gray-200 text-[14px] ml-[-100px] justify-center items-center flex'>{moment.utc(item?.duration * 1000).format('HH:mm:ss')}</div>
                </div>
            ))
        }
    </div>
  )
}

export default PlayListItems