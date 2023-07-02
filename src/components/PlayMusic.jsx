import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import rootRedux from '../store/reducer/reducer' 
import {getInforSong, getSong} from '../apis/apiSong'
import icons from '../ultis/icons'


const PlayMusic = () => {

  const {BsThreeDots, AiOutlineHeart, BiSkipNext, BiSkipPrevious, BsPauseCircle, BsPlayCircle, BsShuffle, BsRepeat1} = icons

  const {currSong} = useSelector(state => state.music)
  // console.log(currSong.src)

  
  const [dataCurrSong, setDataCurrSong] = useState(null)
  const [song, setSong] = useState(null)

  const audioPlay = new Audio(song)

  useEffect(() => {
    const dataSong = async () => {
      const rs = await getInforSong(currSong)
      const rs2 = await getSong(currSong)
      console.log('detail song', rs)
      if (+rs.data.err === 0) {
        setDataCurrSong(rs?.data)
      }
      
      if (rs2.data.err === 0) {
        setSong(rs2.data.data['128'])
      }
    }
    console.log('songgg : ', song)
    console.log('data : ',dataCurrSong?.data?.album?.artistsNames)
    dataSong()
    
  }, [currSong])

  useEffect(() => {
    audioPlay.play()
  }, [currSong])

  return (
    <div className='p-4 bg-[#6b5190] h-[80px] flex'>
      <div className='w-[30%] flex-auto flex'>
        <div className='flex items-center'>
          <img src={dataCurrSong?.data?.thumbnail} className='rounded-md w-14' alt="" />
        </div>
        <div className='flex flex-col ml-3 justify-center'>
          <span className='text-[14px] text-gray-50'>{dataCurrSong?.data?.album?.title}</span>
          <span className='text-[13px] text-gray-200'>{dataCurrSong?.data?.album?.artistsNames}</span>
        </div>
        <div className='flex items-center ml-[30px]'>
          <AiOutlineHeart className='mx-3 text-gray-100 text-[23px] hover:text-gray-200 cursor-pointer'></AiOutlineHeart>
          <BsThreeDots className='text-gray-100 mx-2 text-[23px] hover:text-gray-200 cursor-pointer'></BsThreeDots>
        </div>
      </div>
      <div className='w-[50%] flex-auto flex flex-col justify-center items-center '>
        <div className='flex text-gray-200'>
          <span><BsShuffle className='mx-2 cursor-pointer hover:text-gray-50' size='22px'></BsShuffle></span>
          <span><BiSkipPrevious className='mx-2 cursor-pointer hover:text-gray-50' size='22px'></BiSkipPrevious></span>
          <span><BsPlayCircle className='mx-2 cursor-pointer hover:text-gray-50' size='22px'></BsPlayCircle></span>
          <span><BiSkipNext className='mx-2 cursor-pointer hover:text-gray-50' size='22px'></BiSkipNext></span>
          <span><BsRepeat1 className='mx-2 cursor-pointer hover:text-gray-50' size='22px'></BsRepeat1></span>
        </div>
        <div>Loading</div>
      </div>
      <div className='w-[20%] flex-auto'>Voluum</div>
    </div>
  )
}

export default PlayMusic