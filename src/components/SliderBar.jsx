import React from 'react'
import { useSelector } from 'react-redux'
const SliderBar = () => {

    const { HomeData } = useSelector(state => state.app)
    console.log('Home', HomeData, typeof(HomeData))
    return (
    <div className='flex gap-4 w-full'>
      {
        HomeData?.items?.map(item => (
          <img src={item.banner} key={item.encodeId} alt='banner-song'
          className='flex-1 object-contain'
          ></img>
        ))
      }
    </div>
  )
}

export default SliderBar