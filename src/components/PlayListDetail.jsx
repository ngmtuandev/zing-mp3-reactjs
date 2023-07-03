import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getApiPlayList} from '../apis/apiPlaylist'
import moment from 'moment/moment'
import PlayList from './PlayList'
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch } from 'react-redux'
import {setPlayList} from '../store/action/playlist'

const PlayListDetail = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const {namesong, idsong} = params
    // console.log('test', namesong, idsong)

    const [dataPlaylist, setDataPlaylist] = useState(null)

    useEffect(() => {
        const fetchApiPlayList = async () => {
            const rs = await getApiPlayList(idsong)
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
    
    <div className='flex gap-7 px-6 mt-6 w-full h-full'>
        <div className='w-[20%] text-gray-300 flex flex-col'>
            <div>
                <img className='rounded-md w-full' src={dataPlaylist?.thumbnail} alt="" />
            </div>
            <span className='text-[16px] text-gray-50 mb-1 font-bold mt-2 items-center flex justify-center'>{dataPlaylist?.title}</span>
            <span className='text-[12px] flex justify-center'>Cập nhập: {moment.unix(dataPlaylist?.contentLastUpdate).format("DD/MM/YYYY")}</span>
            <span className='text-[12px] flex justify-center'>Lượt thích: {dataPlaylist?.like}</span>
        </div>
        <Scrollbars style={{ width: '100%', height: '80%' }}>
        <div className='flex-auto'>
            <PlayList song = {dataPlaylist?.song?.items} durationCount = {dataPlaylist?.song?.totalDuration} ></PlayList>
        </div>
        </Scrollbars>
    </div>
    
  )
}

export default PlayListDetail