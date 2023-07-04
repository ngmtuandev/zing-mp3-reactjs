import React from 'react'
import {NavLink, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {setChoose} from '../store/action/isLoadHome'
import {SlideItemChoose} from '../components/index'

const SliderChoose = ({items, title}) => {
    const dispatch = useDispatch()
    const {isChoose} = useSelector(state => state.app)
    const choose = [
        'TẤT CẢ',
        'VIỆT NAM',
        'QUỐC TẾ'    
    ]

    // console.log(isChoose)
    // console.log('release: ', items)
    const All = []
    All.push(items?.["all"])
    const Others = []
    Others.push(items?.["others"])
    const VPops = []
    VPops.push(items?.["vPop"])
    console.log('new release : ', All)
  return (
    <div className='flex gap-5 flex-col p-[20px]'>
        <div className='text-gray-100 mb-4'>{
            choose.map((item, index) => (
                // <NavLink key={index} className={({isActive}) => isActive ? `text-purple-400` : `text-gray-100`}>{item}</NavLink>
                <NavLink onClick={() => dispatch(setChoose(index))}
                className={isChoose === index ? `p-[5px] px-3 text-[13px] rounded-md mr-[20px] cursor-pointer text-gray-50 bg-gray-500` 
                : 'cursor-pointer p-[5px] px-3 rounded-md text-[13px] mr-[20px] bg-gray-200 text-gray-800'}
                key={index}
                >{item}</NavLink>
            ))
        }</div>
        <div>
            {
                isChoose === 0 && <SlideItemChoose title = {title} item = {All}></SlideItemChoose>
            }
            {
                isChoose === 1 && <SlideItemChoose title = {title} item = {Others}></SlideItemChoose>
            }
            {
                isChoose === 2 && <SlideItemChoose title = {title} item = {VPops}></SlideItemChoose>
            }
        </div>
    </div>
  )
}

export default SliderChoose