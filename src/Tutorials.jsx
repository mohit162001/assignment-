import React from 'react'
import './Tutorials.css'
<<<<<<< HEAD
=======
import { Fade,Slide } from 'react-slideshow-image'
>>>>>>> 00315add664a54eabe73f3256cd6dec69460ec70
import url1 from '../src/images/slider1.jpg'
import url2 from '../src/images/slider2.jpg'
import url3 from '../src/images/slider3.jpg'
import url4 from '../src/images/slider4.jpg'
import url5 from '../src/images/slider5.jpg'
const Tutorials = () => {

const slideImages = [
  {
    url:url1
  },
  {
    url:url2
  },
  {
    url:url3
  },
  {
    url:url4
  },
  {
    url:url5
  }
]
  return (
  
    <>
    <h1 className=' tutheading'>Tutorials that people love most</h1>
    <div className="container">
    <div className="wrapper">
    <i  className="fa-solid fa-angle-left"></i>
      <div className="carousel">
        <img src={url1} alt="" />
        <img src={url2} alt="" />
        <img src={url3} alt="" />
        <img src={url4} alt="" />
        <img src={url5} alt="" />
      </div>
      <i className="fa-solid fa-angle-right"></i>
    </div>
    </div>
    </>
  )
}

export default Tutorials