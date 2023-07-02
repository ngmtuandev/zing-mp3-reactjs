import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from '../../components/index'
import {getHome} from '../../apis/apiHome'
import SliderBar from '../../components/SliderBar'

const Home =  () => {

  useEffect( () => {
    const fetchDataHome =  async() => {
      const rs = await getHome()
      console.log(rs)
    }
    fetchDataHome()
  }, [])

  return (
    <div className='overflow-y-auto'>
      <SliderBar></SliderBar>
    </div>
  )
}

export default Home