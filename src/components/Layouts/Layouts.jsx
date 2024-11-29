import './style.layouts.scss'
import UnitedKingdom from '../../Images/United-Kingdom.png'
import Armenia from '../../Images/Armenia.png'
import Russia from '../../Images/Russia.png'
import { useState, useEffect } from 'react'
import { NavLink, Outlet } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { languageEnglish, languageArmenian, languageRussian } from '../../redux/languageSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

function Layouts() {

    const [minLinks, setMinLinks] = useState(false)
    const [iconOpen, setIconOpen] = useState(false)
    const [changeLanguage, setChangeLanguage] = useState([false, false, false])

    const dispatch = useDispatch()
    const language = useSelector(({language})=> language)

    useEffect(()=>{
        const handleClickOutside = () => {
            setIconOpen(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    },[])
    

  return (<>
        <header>
            <nav>
                <NavLink to='/' className='logo' onClick={()=>{setMinLinks(false)}}>{language.nav[0]}</NavLink>
                <div className='min-links'>
                    <div className={minLinks ? 'burger will-close' : 'burger' } onClick={()=>{setMinLinks(!minLinks)}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={minLinks ? 'max-links ' + 'max-height' : 'max-links ' + 'min-height'}>
                    <div className={minLinks ? 'big' : 'small'}><NavLink to='/' onClick={()=>{setMinLinks(false)}}
                        className={({isActive})=> {
                        if(isActive) return "link-active"
                         return ""
                        }}
                    >{language.nav[1]}</NavLink></div>
                    <div className={minLinks ? 'big' : 'small'}><NavLink to='/about' onClick={()=>{setMinLinks(false)}}
                        className={({isActive})=> {
                        if(isActive) return "link-active"
                         return ""
                        }}
                    >{language.nav[2]}</NavLink></div>
                    <div className={minLinks ? 'big' : 'small'}><NavLink to='/skills' onClick={()=>{setMinLinks(false)}}
                        className={({isActive})=> {
                        if(isActive) return "link-active"
                         return ""
                        }}
                    >{language.nav[3]}</NavLink></div>
                    <div className={minLinks ? 'big' : 'small'}><NavLink to='/contact' onClick={()=>{setMinLinks(false)}}
                        className={({isActive})=> {
                        if(isActive) return "link-active"
                         return ""
                        }}
                    >{language.nav[4]}</NavLink></div>
                    
                    <div className={minLinks ? 'language ' + 'big-lang' : 'language ' + 'small-leng'}
                         style={{height: iconOpen ? '105px' : '30px'}}>
                        <FontAwesomeIcon icon={faSortDown} className='arrow-icon' 
                            onClick={(e)=>{
                                e.stopPropagation()
                                 setIconOpen(!iconOpen)
                            }}/>
                            <div className={changeLanguage[0] ? 'first-element' : ''}
                                onClick={()=> {
                                    setChangeLanguage(changeLanguage.map((e, i)=> i == 0 ? e = true : e = false))
                                    setIconOpen(false)
                                    dispatch(languageEnglish())
                                }}
                            >   
                                <img src={UnitedKingdom} alt="" />
                            </div>
                            <div className={changeLanguage[1] ? 'first-element' : ''}
                                onClick={()=> {
                                    setChangeLanguage(changeLanguage.map((e, i)=> i == 1 ? e = true : e = false))
                                    setIconOpen(false)
                                    dispatch(languageArmenian())
                                }}
                            >
                                <img src={Armenia} alt="" />
                            </div>
                            <div className={changeLanguage[2] ? 'first-element' : ''}
                                onClick={()=> {
                                    setChangeLanguage(changeLanguage.map((e, i)=> i == 2 ? e = true : e = false))
                                    setIconOpen(false)
                                    dispatch(languageRussian())
                                }}
                            >
                                <img src={Russia} alt="" />
                            </div>
                    </div>

                </div>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
  </>)
}

export default Layouts