import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {Header, SlideShowList, SlideShowListCircle, SliderChoose} from '../../components/index'
import {getHome} from '../../apis/apiHome'
import SliderBar from '../../components/SliderBar'
import { useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';

const Home =  () => {

  const {DataPositive, Home, chill, singerTrend, radio, newRelease} = useSelector(state => state.app)

  // useEffect( () => {
  //   const fetchDataHome =  async() => {
  //     const rs = await getHome()
  //     console.log('rs home : ', rs)
  //   }
  //   fetchDataHome()
  // }, [])

  // console.log('Data home', Home)

  // console.log('Data Positive', DataPositive)

  // console.log('Chill item : ', chill.items?.['1'])

  // console.log('Radio : ', radio)

  const itemChill = [];
    for (let i = 0; i<5; i++) {
      // console.log('chill : ', chill?.items?.[`${i}`])
      itemChill.push(chill?.items?.[`${i}`])
    }

  const radioList = [];
    for (let i = 0; i<6; i++) {
      radioList.push(radio?.items?.[`${i}`])
    }

    // console.log('newRelease', newRelease.items)

  return (
    <Scrollbars autoHide style={{ width: '100%', height: '80%' }}>
    <div className='overflow-y-auto'>
      <SliderBar></SliderBar>
      <div>
        <SlideShowList title = {DataPositive.title} items = {DataPositive.items}></SlideShowList>
      </div>
      <div>
        <SlideShowList title = {chill.title} items = {itemChill}></SlideShowList>
      </div>
      <div>
        <SlideShowList title = {singerTrend.title} items = {singerTrend.items}></SlideShowList>
      </div>
      <div>
        <SlideShowListCircle title = {radio.title} items = {radioList}></SlideShowListCircle>
      </div>
      <div>
        <SliderChoose items = {newRelease.items} title = {newRelease.title}></SliderChoose>
      </div>
    </div>
    <div className='pb-[90px]'></div>
    </Scrollbars>
  )
}

export default Home