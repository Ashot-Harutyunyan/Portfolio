import './about.style.scss'
import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import ReactjsImage from '../../Images/Reactjs.png'
import JavaScript from '../../Images/js.png'
import OnlineShop from '../../Images/online-shop.svg'

function About() {
  
  const language = useSelector(({language})=> language.about)

  return (<>
    <div className='about-section-one'>
      <div>
          <div className='about-section-one-div-1'>
              <h2>{language.section1.title1}</h2>
              <p>{language.section1.text1}</p>
          </div>

          <div className='about-section-one-div-2'>
              <p>{language.section1.Name}</p>
              <p>{language.section1.Birthday}</p>
              <p>{language.section1.City}</p>
              <p>{language.section1.email}</p>
              <p>{language.section1.phone}</p>
              <p>{language.section1.language}</p>
          </div>
      </div>

      <div>
          <div className='about-section-one-div-3'>
              <h2>{language.section1.title}</h2>
              <p>{language.section1.text}</p>
          </div>

          <div className='about-section-one-div-4'>
              <div>
                <p>{language.section1.trainingYear}</p>
                <p>{language.section1.training}</p>
                <p>{language.section1.course}</p>
              </div>
              <div>
                <p>{language.section1.universityYear}</p>
                <p>{language.section1.university}</p>
                <p>{language.section1.degree}</p>
              </div>
          </div>
      </div>
    </div>

    <div className='about-section-two'>
        <h2>{language.section1.title}</h2>
        <div className='about-section-two-div'>
          {language.section2.MyStrengths.map((elem, index)=>{
            return <div key={index}>
              <p>{elem}</p>
            </div>
          })}
        </div>
    </div>

    <div>
      <h2 className='github-Projects-title'>{language.section3.title}</h2>

      <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >

        {language.section3.projects.map(({text, link, linkText, images}, index)=>{
          return <SwiperSlide key={index} className='mySwiperSlide'>
                    <div className='about-container-project'
                    style={{ 
                      backgroundImage: images == 'ReactJS' ? `url(${ReactjsImage})` : images == 'OnlineShop' ? `url(${OnlineShop})` : `url(${JavaScript})`,
                      backgroundColor: images == 'ReactJS' ? '#0D0628' : images == 'OnlineShop' ? '#062948' : '#222F3E'
                      }} >
                      <p
                      style={{
                        fontSize: linkText == 'GitHub Link' ? 'clamp(8px, .9vw, 16px)' 
                        : linkText == 'GitHub Հղում' ? 'clamp(6px, .6vw, 16px)' : 'clamp(7px, .8vw, 16px)' 
                      }}>{text}</p>
                      <Link target='_blank' to={link}><u>{linkText}</u></Link>
                    </div>
                </SwiperSlide>
        })}

      </Swiper>
    </div>
  </>)
}

export default About