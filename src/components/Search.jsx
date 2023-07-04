import React, { useState } from 'react'
import icons from '../ultis/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getDataApiSearch}  from '../store/action/searchaction'
import path from '.././ultis/path'
import { useNavigate, createSearchParams } from 'react-router-dom'
const Search = () => {
  const dispatch = useDispatch()
  const [valueSearch, setValueSearch] = useState()
  const {BiSearchAlt} = icons
  const naviagte = useNavigate()
  useEffect(() => {
    dispatch(getDataApiSearch(valueSearch))
  }, [valueSearch])
  // console.log('value', valueSearch?.['data']?.['data'])
  // const {dataSearch} = useSelector(state => state.app)
  // console.log('dataSearch',dataSearch)

  const handleSearch = (e) => {
    if (+e.keyCode === 13) {
      setValueSearch(e.target.value)
      console.log(valueSearch)
      naviagte({
        pathname: `${path.SEARCH_ALL}`,
        search: createSearchParams({
          q:valueSearch,
        }).toString()
      })
    }
  }

  return (
    <div className='flex'>
        <div className='p-2 pl-3 text-gray-200 w-[60px] bg-[#54406e] rounded-l-3xl'><BiSearchAlt size='23px'></BiSearchAlt></div>
        <input 
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
        onKeyUp={handleSearch}
        className='p-2 w-[400px] outline-none text-gray-200 bg-[#54406e] rounded-r-3xl'  type="text" placeholder='Nhập bài hát, tên ca sỹ bạn muốn tìm kiếm ?'/>
    </div>
  )
}

export default Search