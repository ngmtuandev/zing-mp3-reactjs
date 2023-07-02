import React, {useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import rootRedux from '../store/reducer/reducer' 
import {getApiInforSong, getApiSong} from '../apis/apiSong'
import icons from '../ultis/icons'
import {setPlay} from '../store/action/songCurr'
import moment from 'moment'


var setTimeLoad 

const PlayMusic = () => {

  

  const dispatch = useDispatch()
  const {BsThreeDots, AiOutlineHeart, BiSkipNext, BiSkipPrevious, BsPauseCircle, BsPlayCircle, BsShuffle, BsRepeat1} = icons

  const {currSong, playSong} = useSelector(state => state.music)
  // console.log(currSong.src)

  
  const [dataCurrSong, setDataCurrSong] = useState(null)

  const [audio, setAudio] = useState(new Audio())

  const [realTime, setRealTime] = useState(0)

  const load = useRef()

  useEffect(() => {
    const dataSong = async () => {
      const rs = await getApiInforSong(currSong)
      const rs2 = await getApiSong(currSong)
      console.log('detail song', rs)
      if (+rs.data.err === 0) {
        audio.pause()
        setDataCurrSong(rs?.data)
      }
      
      if (rs2.data.err === 0) {
        audio.pause()
        dispatch(setPlay(false))
        setAudio(new Audio(rs2?.data.data['128']))
        
        setRealTime(0)
      }
    }
    // console.log('songgg : ', song)
    // console.log('data : ',dataCurrSong?.data?.album?.artistsNames)
    dataSong()
    
  }, [currSong])

  // console.log('src song : ', song)
  console.log('data current song : ', dataCurrSong)

  useEffect(() => {
    audio.pause()
    if (playSong) audio.play()
  }, [audio])

  const HandleStateSong = () => {
    // console.log(song)
      if (playSong) {
        audio.pause()
        dispatch(setPlay(false))
      }
      else {
        audio.play()
        dispatch(setPlay(true))
      }
  }

  useEffect(() => {
    if (playSong) {
      setTimeLoad = setInterval(()=>{
        // let time = audioTime
        console.log(audio.currentTime)
        let timeload = Math.round(audio.currentTime * 10000 / dataCurrSong?.data?.duration) / 100
        // console.log(time)
        setRealTime(Math.round(audio.currentTime))
        load.current.style.cssText = `width: ${timeload}%`
      }, 100)
    }
    else {
      setTimeLoad &&  clearInterval(setTimeLoad)
    }
  }, [playSong])

  return (
    <div className='p-4 bg-[#453162] h-[100px] flex'>
      <div className='w-[25%] flex-auto flex'>
        <div className='flex items-center'>
          <img src={dataCurrSong?.data?.thumbnail} className='rounded-md w-14' alt="" />
        </div>
        <div className='flex flex-col ml-3 justify-center'>
          <span className='text-[14px] text-gray-50'>{dataCurrSong?.data?.album?.title}</span>
          <span className='text-[13px] text-gray-200'>{dataCurrSong?.data?.album?.artistsNames}</span>
        </div>
        <div className='flex items-center ml-[30px]'>
          <AiOutlineHeart className='mx-3 text-gray-100 text-[19px] hover:text-gray-200 cursor-pointer'></AiOutlineHeart>
          <BsThreeDots className='text-gray-100 mx-2 text-[19px] hover:text-gray-200 cursor-pointer'></BsThreeDots>
        </div>
      </div>
      <div className='w-[55%] flex-auto flex flex-col justify-center ml-[-80px] items-center '>
        <div className='flex text-gray-200'>
          <span><BsShuffle className='mx-2 cursor-pointer hover:text-gray-50' size='24px'></BsShuffle></span>
          <span><BiSkipPrevious className='mx-2 cursor-pointer hover:text-gray-50' size='24px'></BiSkipPrevious></span>
          <span onClick={() => HandleStateSong()}>
            {playSong ? <BsPauseCircle className='mx-2 cursor-pointer hover:text-gray-50' size='24px'></BsPauseCircle> : <BsPlayCircle className='mx-2 cursor-pointer hover:text-gray-50' size='24px'></BsPlayCircle>}
          </span>
          <span><BiSkipNext className='mx-2 cursor-pointer hover:text-gray-50' size='24px'></BiSkipNext></span>
          <span><BsRepeat1 className='mx-2 cursor-pointer hover:text-gray-50' size='24px'></BsRepeat1></span>
        </div>
        <div>
          <div className='w-[450px] relative h-[5px] bg-slate-400 rounded-md mt-4'>
            <div ref={load} className='absolute h-[5px] top-0 left-0 rounded-md bg-slate-50'></div>
          </div>
          <div className='flex justify-center mt-2 text-gray-300'>{moment.utc(realTime*1000).format('mm:ss')}</div>
        </div>
      </div>
      <div className='w-[20%] flex-auto'>Voluum</div>
    </div>
  )
}

export default PlayMusic