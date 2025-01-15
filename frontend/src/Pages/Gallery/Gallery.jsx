import React from 'react'
import './Gallery.css'
import photo_1 from '../../assets/gallery/t1.avif'
//import photo_2 from '../../assets/gallery/t2.jpg'
import photo_3 from '../../assets/gallery/t3.avif'
import photo_4 from '../../assets/gallery/t4.jpg'
//import photo_5 from '../../assets/gallery/t5.jpg'
import photo_7 from '../../assets/gallery/t7.jpg'
import photo_8 from '../../assets/gallery/t8.jpg'
import photo_9 from '../../assets/gallery/t9.jpg'
import photo_10 from '../../assets/gallery/t10.jpeg'
import photo_11 from '../../assets/gallery/t11.jpg'
import photo_12 from '../../assets/gallery/t12.jpg'
import photo_13 from '../../assets/gallery/t13.jpg'
import photo_14 from '../../assets/gallery/t14.jpg'
import photo_15 from '../../assets/gallery/t15.jpg'
import photo_16 from '../../assets/gallery/t16.jpg'
import photo_17 from '../../assets/gallery/t17.jpg'
import photo_18 from '../../assets/gallery/t18.jpg'
import photo_19 from '../../assets/gallery/t19.jpg'
import photo_20 from '../../assets/gallery/t20.jpg'
import photo_21 from '../../assets/gallery/t21.jpg'

const Gallery = () => {
  return (
    <div className='photos'>
      <div className='topic'>
        
        <h1>visit our customers tour gallery </h1>
      </div>
      
      <div className="gallery">
        <img src={photo_1} alt="" />
        <img src={photo_11} alt="" />
        <img src={photo_9} alt="" />
        
        <img src={photo_3} alt="" />
        <img src={photo_4} alt="" />
        <img src={photo_15} alt="" />
        
        <img src={photo_8} alt="" />
        <img src={photo_17} alt="" />
        <img src={photo_19} alt="" />
        <img src={photo_7} alt="" />
        <img src={photo_20} alt="" />
        <img src={photo_21} alt="" />

        <img src={photo_18} alt="" />
       
        
        <img src={photo_12} alt="" />
        <img src={photo_13} alt="" />
        <img src={photo_10} alt="" />
        <img src={photo_14} alt="" />
        
        <img src={photo_16} alt="" />
        
        
      </div>
      
    </div>
  )
}

export default Gallery
