import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setSongCurrent} from '../store/action/songCurr'
import { useNavigate } from 'react-router-dom'
const SliderBar = () => {

    const navigation = useNavigate()

    const { HomeData } = useSelector(state => state.app)
    console.log('Home', HomeData, typeof(HomeData))

    useEffect(() => {
      const allImg = document.getElementsByClassName("img-item");
      let min = 0;
      let max = 2;
      const interValId = setInterval(() => {
        for (let i = 0; i < allImg.length; i++) {
          if (i <= max && i >= min) {
            allImg[i].style.cssText = "display:none"; 
          } else {
            allImg[i].style.cssText = "display:block";
          }
        }
  
        min += 1;
        max += 1;
        if (min === 4 && max === 6) {
          min = 0;
          max = 2;
        }
      }, 2000);
      return () => {
        interValId && clearInterval(interValId);
      };
    }, []);

    const dispatch = useDispatch()

    const handlePlaySong = (item) => {
      if (item?.type === 1) {
        dispatch(setSongCurrent(item.encodeId))
      }
      else if (item?.type === 4) {  
        const linkPlayList = item?.link.split('.')[0]
        navigation(linkPlayList)
        console.log(linkPlayList)
      }
      // console.log(item)
    }

    return (
    <div className='flex gap-4 w-full overflow-hidden p-[20px] animate-spin'>
      {
        HomeData?.items?.map(item => (
          <img src={item.banner} key={item.encodeId} alt='banner-song'
          className='transition-all duration-200 img-item flex-1 object-contain w-[227px] rounded-md'
          onClick={() =>  handlePlaySong(item)}
          ></img>
        ))
      }
    </div>
  )
}

export default SliderBar