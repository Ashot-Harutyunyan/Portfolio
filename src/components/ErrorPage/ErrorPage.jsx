import './style.ErrorPage.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'


function ErrorPage() {
  return (<> 
  <div className='error-page'>
    <div className='conteiner-error-page'>
    <Link to='..'><FontAwesomeIcon icon={faCircleArrowLeft} className='error-icon'/></Link>
        <div className='conteiner-error'>
            <div className='conteiner-text'>
                <p>Page not found</p>
            </div>     
        </div>
    </div>
  </div>
  </>)
}

export default ErrorPage