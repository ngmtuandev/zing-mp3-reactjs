import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getApiPlayList} from '../apis/apiPlaylist'
import RingLoader from "react-spinners/RingLoader";
import moment from 'moment/moment'
import PlayList from './PlayList'
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch } from 'react-redux'
import {setPlayList, setLoadPlayList} from '../store/action/playlist'
import { useSelector } from 'react-redux'


const PlayListDetail = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const {namesong, idsong} = params
    // console.log('test', namesong, idsong)

    const [dataPlaylist, setDataPlaylist] = useState(null)
    const {isLoadPlayList} = useSelector(state => state.app)
    console.log('isLoadPlayList', isLoadPlayList)

    useEffect(() => {
        const fetchApiPlayList = async () => {
            dispatch(setLoadPlayList(false))
            console.log('isLoad 1 : ', isLoadPlayList)
            const rs = await getApiPlayList(idsong)
            dispatch(setLoadPlayList(true))
            console.log('playlist', rs)
            if (+rs.status === 200) {
                setDataPlaylist(rs?.data?.data)
                dispatch(setPlayList(rs?.data?.data?.song?.items))
            }
        }
        fetchApiPlayList()
        console.log('dataPlayList', dataPlaylist)
    },[idsong])

  return (
    
    <div className='flex gap-7 relative px-6 mt-6 w-full h-full'>
        {!isLoadPlayList && <div className='w-[100%] absolute flex justify-center items-center mt-[100px]'><RingLoader color="#695587" size={118}></RingLoader></div>}
        <div className='w-[20%] text-gray-300 flex flex-col'>
            <div>
                <img className='rounded-md w-full' src={dataPlaylist?.thumbnail} alt="" />
            </div>
            <span className='text-[16px] text-gray-50 mb-1 font-bold mt-2 items-center flex justify-center'>{dataPlaylist?.title}</span>
            <span className='text-[12px] flex justify-center'>Cập nhập: {moment.unix(dataPlaylist?.contentLastUpdate).format("DD/MM/YYYY")}</span>
            <span className='text-[12px] flex justify-center'>Lượt thích: {dataPlaylist?.like}</span>
        </div>
        <Scrollbars autoHide style={{ width: '100%', height: '80%' }}>
        <div className='flex-auto'>
            <PlayList song = {dataPlaylist?.song?.items} durationCount = {dataPlaylist?.song?.totalDuration} ></PlayList>
        </div>
        </Scrollbars>
    </div>
    
  )
}

export default PlayListDetail