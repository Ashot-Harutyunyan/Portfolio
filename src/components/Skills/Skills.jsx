import './style.skills.scss'
import hmtlImg from "../../Images/html.svg"
import cssImg from "../../Images/css.svg"
import sassImg from "../../Images/sass.svg"
import gitImg from "../../Images/git.svg"
import githubImg from "../../Images/github.svg"
import jsImg from "../../Images/javascript.svg"
import reactImg from "../../Images/react.svg"
import reduxImg from "../../Images/redux.svg"
import React from 'react'
import { useSelector } from 'react-redux'

const Skills = () => {
    const language = useSelector(({language})=> language.Skills)

  return (<>
            <h1 className='skills-title'>{language.title}</h1>
    <div className='container-skills'>
      <div className='container-skills-svg'>
          <img src={hmtlImg} alt="" />
          <h2>HTML</h2>
      </div>
      <div className='container-skills-svg'>
          <img src={cssImg} alt="" />
          <h2>CSS</h2>
      </div>
      <div className='container-skills-svg'>
          <img src={sassImg} alt="" />
          <h2>SASS</h2>
      </div>
      <div className='container-skills-svg'>
          <img src={gitImg} alt="" />
          <h2>GIT</h2>
      </div>
      <div className='container-skills-svg'>
          <img src={githubImg} alt="" />
          <h2>GITHUB</h2>
      </div>
      <div className='container-skills-svg'>
          <img src={jsImg} alt="" />
          <h2>JAVASCRIPT</h2>
      </div>
      <div className='container-skills-svg'>
          <img src={reactImg} alt="" />
          <h2>REACT</h2>
      </div>
      <div className='container-skills-svg'>
          <img src={reduxImg} alt="" />
          <h3>REDUX <br />
          REDUX-TOOLKIT</h3>
      </div>
    </div>

 </>)
}

export default Skills;
