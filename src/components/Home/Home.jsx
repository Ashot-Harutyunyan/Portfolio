import './style.home.scss'
import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'

import myPhoto from '../../Images/myPhoto.jpg'

function Home() {
  const language = useSelector(({language})=> language)

  return (<>
    <div className='home-container'>
        <div className='home-container-text'>
            <h2>{language.home.title} <br />
               <span>{language.home.title1}</span></h2>

            <p>{language.home.text}</p>

            <div className='home-container-icon'>
               <Link to='https://www.linkedin.com/in/harutyunyan-ashot?original_referer=' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='home-icon linkedin'/></Link>
               <Link to='https://github.com/Ashot-Harutyunyan' target='_blank'><FontAwesomeIcon icon={faSquareGithub} className='home-icon github'/></Link>
               <Link to='https://t.me/Ashot0497' target='_blank' className='tel'><FontAwesomeIcon icon={faTelegram} className='home-icon telegram'/></Link>
            </div>
            
          <a href='/Ashot-Harutyunyan-CV.pdf' className='cv' download target="_blank">
          
            <button className="button">
              <span className="button__text">{language.home.button} CV</span>
              <span className="button__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg">
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
                </span>
            </button>
          </a>
            
            </div>


        <div className='home-container-img'>
          <div></div>
          <div></div>
            <img src={myPhoto} alt="Ashot Harutyunyan" loading="lazy"/> 
          <div></div>
          <div></div>
        </div>
    </div>   
  </>)
}

export default Home