import React from 'react'
import PlayListItems from './PlayListItems'

const PlayList = ({song}) => {

  return (
    <div className='pr-[20px] overflow-y-hidden overflow-x-hidden'>
        <div className='flex justify-between text-gray-100 items-center'>
            <span className='text-[13px] w-[30%]'>BÀI HÁT</span>
            <span className='text-[13px] w-[50%] flex items-center justify-center'>PLAYLIST</span>
            <span className='text-[13px] w-[20%] flex justify-end'>THỜI GIAN</span>
        </div>
        <PlayListItems song = {song} ></PlayListItems>
    </div>
  )
}

export default PlayList