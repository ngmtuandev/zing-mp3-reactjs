import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {Header, SlideShowList} from '../../components/index'
import {getHome} from '../../apis/apiHome'
import SliderBar from '../../components/SliderBar'
import { useSelector } from 'react-redux'

const Home =  () => {

  const {DataPositive, Home} = useSelector(state => state.app)

  // useEffect( () => {
  //   const fetchDataHome =  async() => {
  //     const rs = await getHome()
  //     console.log('rs home : ', rs)
  //   }
  //   fetchDataHome()
  // }, [])

  console.log('Data home', Home)

  console.log('Data Positive', DataPositive)

  return (
    <div className='overflow-y-auto'>
      <SliderBar></SliderBar>
      <div>
        <SlideShowList title = {DataPositive.title} items = {DataPositive.items}></SlideShowList>
      </div>
    </div>
  )
}

export default Home