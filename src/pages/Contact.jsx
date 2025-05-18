import React from 'react'
import { assets } from '../assets/assets'
import './Contact.css'

const Contact = () => {
   
  return (
    <>
    <div className=' px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/hero-image.jpg")] bg-no-repeat bg-cover bg-center h-screen'>
      <div className="container">
        <div className="imageDiv"><img src={assets.devImage} alt="" className='image' /></div>
        <p className='about'>Our developers - Aryan and Sahil</p>
        </div>

        <div className="links">
        <a href="https://www.instagram.com/__aryann_y?igsh=aWZzN3g2NmMxMmpj" className='link'>Aryan</a>
        <a href="https://www.instagram.com/urstrulysahil7?igsh=aWs5bzVwenpyY2Q=" className='link'>Sahil</a>
        </div>
    
    </div>    
    </>
  )
 
}

export default Contact
