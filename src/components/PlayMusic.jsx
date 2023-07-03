import React, {useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import rootRedux from '../store/reducer/reducer' 
import {getApiInforSong, getApiSong} from '../apis/apiSong'
import icons from '../ultis/icons'
import {setPlay, setSongCurrent} from '../store/action/songCurr'
import moment from 'moment'
import RotateLoader from "react-spinners/RotateLoader";
import {setStateRight} from '../store/action/sliderRight'



var setTimeLoad 

const PlayMusic = () => {

  

  const dispatch = useDispatch()
  const {GiMusicalNotes, BsThreeDots, AiOutlineHeart, BiSkipNext, BiSolidPlaylist,
    BiSkipPrevious, BsPauseCircle, BsPlayCircle, BsShuffle, BsRepeat1, BsFillVolumeDownFill, BsFillVolumeMuteFill,
    BsFillVolumeUpFill} = icons

  const {currSong, playSong, playlist} = useSelector(state => state.music)
  // console.log(currSong.src)
  const {stateRight} = useSelector(state => state.app)
  console.log('state right : ', stateRight)

  const [stateLoad, setStateLoad] = useState(true)
  
  const [dataCurrSong, setDataCurrSong] = useState(null)

  const [audio, setAudio] = useState(new Audio())

  const [realTime, setRealTime] = useState(0)

  const [stateVolume, setStateVolume] = useState(100)

  const load = useRef()
  const largeload = useRef()

  useEffect(() => {
    const dataSong = async () => {
      setStateLoad(false)
      const rs = await getApiInforSong(currSong)
      const rs2 = await getApiSong(currSong)
      console.log('detail song', rs)
      setStateLoad(true)
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

      if (+rs.data.err !== 0 || rs2.data.err !== 0)
      {
        setRealTime(0)
        setAudio(new Audio())
      }
    }
    // console.log('songgg : ', song)
    // console.log('data : ',dataCurrSong?.data?.album?.artistsNames)
    dataSong()
    
  }, [currSong])

  // console.log('src song : ', song)
  // console.log('data current song : ', dataCurrSong)

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

    setTimeLoad &&  clearInterval(setTimeLoad)

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
  }, [playSong, audio])

  const handleSpaceLoad = (e) => {
    // console.log(e)
    // console.log(largeload.current.getBoundingClientRect().left)
    const percentLoad = Math.round((e.clientX - largeload.current.getBoundingClientRect().left) * 10000 / largeload.current.getBoundingClientRect().width) / 100
    load.current.style.cssText = `width: ${ percentLoad }%`
    audio.currentTime = percentLoad * dataCurrSong?.data?.duration / 100
    const timeLoadProgress = Math.round(percentLoad * dataCurrSong?.data?.duration / 100)
    setRealTime(timeLoadProgress)
  }

  // next && prev

  const nextSong = () => {
    var indexCurSong
    // console.log('data curr', dataCurrSong)
    playlist.forEach((item, index) => {
      // console.log('data next',item, index)
      if (item?.album?.encodeId === dataCurrSong?.data?.album?.encodeId)
      {
        indexCurSong = index
      }
      // console.log('index data current song', indexCurSong)
      // dispatch(setPlay(false))
      // audio.pause()      
    })
    // console.log('play list',playlist[indexCurSong+1])
    dispatch(setSongCurrent(playlist[indexCurSong+1]?.encodeId))
    dispatch(setPlay(true))
  }

  const prevSong = () => {
    var indexCurSong
    // console.log('data curr', dataCurrSong)
    playlist?.forEach((item, index) => {
      // console.log('data next',item, index)
      if (item?.album?.encodeId === dataCurrSong?.data?.album?.encodeId)
      {
        indexCurSong = index
      }
      // console.log('index data current song', indexCurSong)
      // dispatch(setPlay(false))
      // audio.pause()      
    })
    // console.log('play list',playlist[indexCurSong+1])
    dispatch(setSongCurrent(playlist[indexCurSong-1]?.encodeId))
    dispatch(setPlay(true))
  }

  const handleShuff = () => {
    const indexShuff = Math.round(Math.random() * playlist.length ) - 1
    dispatch(setSongCurrent(playlist[indexShuff].encodeId))
    dispatch(setPlay(true))
  }

  useEffect(() => {
    const isEnd = () =>
    { 
      nextSong() // mỗi lần hết => next song là audio thay đổi => chạy hàm
      dispatch(setPlay(true))
    }

    audio.addEventListener('ended', isEnd)

  }, [audio])

  const handleStateRight = () => {
    dispatch(setStateRight(!stateRight))
  }

  const setVolume = (e) => {
    setStateVolume(e.target.value)
    // console.log(stateVolume)
    audio.volume = e.target.value / 100
    // console.log(audio.volume)
  }

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
      <div className='w-[50%] flex-auto flex flex-col justify-center items-center '>
        <div className='flex text-gray-200'>
          <span title='Phát ngẫu nhiên'
            onClick={() => handleShuff()}
          ><BsShuffle className='mx-2 cursor-pointer hover:text-gray-50' size='24px'></BsShuffle></span>
          <span onClick={() => prevSong()}>
            <BiSkipPrevious className={playlist ? 'mx-2 cursor-pointer hover:text-white' : 'mx-2 text-gray-500'} size='24px'></BiSkipPrevious>
          </span>
          <span onClick={() => HandleStateSong()}>
            {!stateLoad ? <div className='mx-4'><RotateLoader color="#dedede" size={8} margin={-15}></RotateLoader> </div>
              : playSong ? <BsPauseCircle className='mx-2 cursor-pointer hover:text-gray-50' size='24px'></BsPauseCircle> 
              : <BsPlayCircle className='mx-2 cursor-pointer hover:text-gray-50' size='24px'></BsPlayCircle>
            } 
          </span>
          <span onClick={() => nextSong()}>
            <BiSkipNext className={playlist ? 'mx-2 cursor-pointer hover:text-white' : 'mx-2 text-gray-500'} size='24px'></BiSkipNext>
          </span>
          <span title='Bật vòng lặp' className='cursor-pointer'>
            <BsRepeat1  size='24px'></BsRepeat1>
          </span>
        </div>
        <div>
          <div ref={largeload} className='w-[450px] relative cursor-pointer h-[5px] bg-slate-400 rounded-md mt-4'
          onClick={(e) => handleSpaceLoad(e)}
          >
            <div ref={load} className='absolute h-[5px] top-0 left-0 rounded-md bg-slate-50'></div>
          </div>
          <div className='flex justify-center mt-2 text-gray-300'>
          {moment.utc(realTime*1000).format('m m : s s')}
          </div>
        </div>
      </div>
      <div className='w-[25%] flex-auto flex items-center justify-center gap-7'>
        <div className='flex items-center gap-3'> 
          <div className='flex gap-3'>

            {+audio.volume === 0 ? <BsFillVolumeMuteFill size={26} className='text-gray-100 cursor-pointer'></BsFillVolumeMuteFill> 
            : <BsFillVolumeMuteFill size={26} className='text-gray-500 hover:text-gray-100 cursor-pointer'></BsFillVolumeMuteFill>}
            {+audio.volume > 0.5 ? <BsFillVolumeUpFill size={26} className='text-gray-300'></BsFillVolumeUpFill>
             :  +audio.volume !== 0 ? <BsFillVolumeDownFill size={26} className='text-gray-300'></BsFillVolumeDownFill>
             : <BsFillVolumeDownFill size={26} className='text-gray-500'></BsFillVolumeDownFill>
            }
            
          </div>
          <input className='w-[100px] cursor-pointer' type="range" 
        min={0} step={1} max={100} onChange={setVolume} value={stateVolume} />
        </div>
        <div className='p-2 bg-[#6e588f] hover:bg-[#654e87] rounded-md cursor-pointer'
          onClick={() => handleStateRight()}
        >
          <BiSolidPlaylist className='text-[24px] text-gray-100'></BiSolidPlaylist>
        </div>
      </div>
    </div>
  )
}

export default PlayMusic