import React from 'react'
import Image1 from './Home/img/img1.jpg'
import Image2 from './Home/img/img2.jpg'
import Image3 from './Home/img/img3.jpg'
import Video1 from './Home/img/video.mp4'
import Video2 from './Home/img/video2.mp4'

function background({herocount, playStatus}) {
 if(playStatus){
   return(
    <video className='backgorund w-[100%] h-[100%] fixed float-left object-fill z-0' autoPlay loop muted>
        <source src={Video2} type='video/mp4' />
    </video>
   )
 }
 else if(herocount===0)
 {
    return(
        <img src={Image1} alt="Image" className='backgorund w-[100%] h-[100%] fixed float-left object-fill z-0'/>
    )
 }
 else if(herocount===1)
 {
    return(
        <img src={Image2} alt="Image" className='backgorund w-[100%] h-[100%] fixed float-left object-fill z-0' />
    )
 }
 else if(herocount===2)
 {
    return(
        <img src={Image3} alt="Image" className='backgorund w-[100%] h-[100%] fixed float-left object-fill z-0'/>
    )
 }



}

export default background
